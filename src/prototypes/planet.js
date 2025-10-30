import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js";

const getStoredProgress = () => {
  const stored = Number(localStorage.getItem("ecoludCollectiveProgress"));
  if (Number.isFinite(stored)) {
    return Math.max(0, Math.min(100, stored));
  }
  return 68;
};

const persistProgress = (value) => {
  try {
    localStorage.setItem("ecoludCollectiveProgress", String(Math.round(value)));
  } catch (error) {
    // stockage non critique
  }
};

const container = document.getElementById("planetCanvas");
let renderer;
let scene;
let camera;
let controls;
let planetMesh;
let planetMaterial;
let cloudMesh;
let cloudMaterial;
let haloMesh;
let haloMaterial;
let starField;
let sparkleMaterial;
let frameId;
let pendingState = { value: getStoredProgress() };

const lowColor = new THREE.Color("#80aab5");
const richColor = new THREE.Color("#50d79d");
const haloCool = new THREE.Color("#7ec8ff");
const haloWarm = new THREE.Color("#bff9e8");

const applyPlanetState = (state) => {
  const value = Math.max(0, Math.min(100, state.value ?? state));
  const green = Math.max(0, Math.min(100, state.green ?? value));
  const ocean = Math.max(0, Math.min(100, state.ocean ?? value));
  const energy = Math.max(0, Math.min(100, state.energy ?? value));

  persistProgress(value);

  const mixGreen = green / 100;
  const mixOcean = ocean / 100;
  const mixEnergy = energy / 100;

  if (planetMaterial) {
    planetMaterial.color.copy(lowColor).lerp(richColor, mixGreen);
    planetMaterial.emissive.copy(new THREE.Color("#10343a").lerp(new THREE.Color("#18f1ce"), mixEnergy * 0.6));
    planetMaterial.emissiveIntensity = 0.15 + 0.45 * mixEnergy;
  }

  if (haloMaterial) {
    haloMaterial.color.copy(haloCool).lerp(haloWarm, mixEnergy);
    haloMaterial.opacity = 0.18 + 0.35 * mixEnergy;
  }

  if (cloudMaterial) {
    cloudMaterial.opacity = 0.25 + 0.35 * mixOcean;
  }

  if (sparkleMaterial) {
    sparkleMaterial.opacity = 0.25 + 0.4 * mixEnergy;
    sparkleMaterial.size = 0.015 + 0.015 * mixEnergy;
    sparkleMaterial.needsUpdate = true;
  }

  pendingState = { value, green, ocean, energy };
  return value;
};

const textureLoader = new THREE.TextureLoader();

const loadTexture = (primary, fallback) => new Promise((resolve) => {
  textureLoader.load(
    primary,
    (texture) => resolve(texture),
    undefined,
    () => {
      if (fallback) {
        textureLoader.load(fallback, (texture) => resolve(texture));
      } else {
        resolve(null);
      }
    }
  );
});

const initScene = async () => {
  if (!container) {
    window.updatePlanet = (state) => applyPlanetState(state || {});
    return;
  }

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(0, 0, 4.2);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.rotateSpeed = 0.6;
  controls.minDistance = 2.6;
  controls.maxDistance = 6.5;

  const ambient = new THREE.AmbientLight(0x92d3ff, 0.55);
  scene.add(ambient);

  const keyLight = new THREE.DirectionalLight(0xffffff, 1);
  keyLight.position.set(5, 3, 5);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x66aaff, 0.35);
  fillLight.position.set(-4, -2, -4);
  scene.add(fillLight);

  const [earthTexture, bumpTexture, cloudTexture] = await Promise.all([
    loadTexture(
      "assets/textures/earth_daymap.jpg",
      "https://cdn.jsdelivr.net/gh/rajatnag/EarthTextures@main/2k_earth_daymap.jpg"
    ),
    loadTexture(
      "assets/textures/earth_bump.jpg",
      "https://cdn.jsdelivr.net/gh/rajatnag/EarthTextures@main/2k_earth_bump.jpg"
    ),
    loadTexture(
      "assets/textures/clouds.png",
      "https://cdn.jsdelivr.net/gh/rajatnag/EarthTextures@main/2k_earth_clouds.png"
    ),
  ]);

  const geometry = new THREE.SphereGeometry(1.3, 96, 96);
  planetMaterial = new THREE.MeshPhongMaterial({
    map: earthTexture,
    bumpMap: bumpTexture,
    bumpScale: 0.04,
    specular: new THREE.Color("#0d4351"),
    shininess: 12,
  });

  planetMesh = new THREE.Mesh(geometry, planetMaterial);
  scene.add(planetMesh);

  const cloudGeo = new THREE.SphereGeometry(1.33, 96, 96);
  cloudMaterial = new THREE.MeshLambertMaterial({
    map: cloudTexture,
    transparent: true,
    opacity: 0.38,
    depthWrite: false,
  });
  cloudMesh = new THREE.Mesh(cloudGeo, cloudMaterial);
  scene.add(cloudMesh);

  const haloGeo = new THREE.SphereGeometry(1.44, 64, 64);
  haloMaterial = new THREE.MeshBasicMaterial({
    color: haloCool,
    transparent: true,
    opacity: 0.28,
    side: THREE.BackSide,
  });
  haloMesh = new THREE.Mesh(haloGeo, haloMaterial);
  scene.add(haloMesh);

  const starGeometry = new THREE.BufferGeometry();
  const starCount = 2000;
  const positions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i += 1) {
    const radius = 6 + Math.random() * 6;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }
  starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  sparkleMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.02,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.35,
  });
  starField = new THREE.Points(starGeometry, sparkleMaterial);
  scene.add(starField);

  applyPlanetState(pendingState);

  const animate = () => {
    frameId = requestAnimationFrame(animate);
    controls.update();
    if (planetMesh) {
      planetMesh.rotation.y += 0.0009;
    }
    if (cloudMesh) {
      cloudMesh.rotation.y += 0.0014;
    }
    if (starField) {
      starField.rotation.y += 0.0003;
    }
    renderer.render(scene, camera);
  };

  animate();

  const handleResize = () => {
    if (!container) return;
    const { clientWidth, clientHeight } = container;
    renderer.setSize(clientWidth, clientHeight);
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
  };

  window.addEventListener('resize', handleResize);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      controls.autoRotate = false;
    }
  });
};

const updatePlanet = (state = {}) => {
  const payload = typeof state === 'number' ? { value: state } : state;
  const appliedValue = applyPlanetState(payload);
  pendingState = { value: appliedValue, ...payload };
  return appliedValue;
};

window.updatePlanet = updatePlanet;

document.addEventListener('ecolud:collective-progress', (event) => {
  const value = event.detail && typeof event.detail.value === 'number' ? event.detail.value : undefined;
  if (typeof value === 'number') {
    updatePlanet({ value, theme: event.detail?.theme });
  }
});

initScene();

updatePlanet({ value: getStoredProgress() });

(() => {
  const translations = {
    fr: {
      "nav-home": "Accueil",
      "nav-about": "\u00C0 propos",
      "nav-shop": "Boutique",
      "nav-experience": "Exp\u00E9rience",
      "nav-missions": "Missions",
      "nav-leaderboard": "Classement",
      "nav-contact": "Contact",
      "nav-play": "Jouer",
      "nav-back": "Retour accueil",
      "header-cta": "Commander le coffret",
      "hero-title": "Construis ta plan\u00E8te en puzzle et joue avec un coffret unique",
      "hero-tagline":
        "Commande le coffret ECOLUD, re\u00E7ois un puzzle \u00E9co-con\u00E7u et d\u00E9verrouille un univers de mini-jeux coop\u00E9ratifs pour toute la famille.",
      "hero-cta-buy": "Commander le coffret",
      "hero-cta-experience": "Voir comment jouer",
      "shop-title": "Choisis ton coffret \u00E9cologique",
      "shop-subtitle":
        "Des pi\u00E8ces magn\u00E9tiques, un livret d'aventure, une appli \u00E0 scanner : tout est pr\u00EAt pour jouer d\u00E8s la r\u00E9ception.",
      "shop-pack-solo-title": "Coffret Explorer",
      "shop-pack-solo-text":
        "1 puzzle 500 pi\u00E8ces, acc\u00E8s \u00E0 l'appli ECOLUD et missions d\u00E9fis solo.",
      "shop-pack-solo-feature1": "Bois certifi\u00E9 FSC et encres v\u00E9g\u00E9tales",
      "shop-pack-solo-feature2": "Code d'activation illimit\u00E9",
      "shop-pack-solo-feature3": "Livraison neutre en carbone",
      "shop-pack-solo-price": "39\u00A0\u20AC",
      "shop-pack-best": "Best-seller",
      "shop-pack-duo-title": "Coffret Duo",
      "shop-pack-duo-text":
        "2 puzzles 500 pi\u00E8ces, comp\u00E9titions familiales et tableau des scores partag\u00E9.",
      "shop-pack-duo-feature1": "Plateau pliable double face",
      "shop-pack-duo-feature2": "2 comptes joueurs personnalisables",
      "shop-pack-duo-feature3": "Acc\u00E8s aux missions coop\u00E9ratives",
      "shop-pack-duo-price": "69\u00A0\u20AC",
      "shop-pack-school-title": "Coffret Classe",
      "shop-pack-school-text":
        "4 puzzles th\u00E9matiques, fiche p\u00E9dagogie et espace enseignant pour animer un atelier.",
      "shop-pack-school-feature1": "12 missions pr\u00EAtes \u00E0 jouer",
      "shop-pack-school-feature2": "Tableau de bord collectif en temps r\u00E9el",
      "shop-pack-school-feature3": "Support d\u00E9di\u00E9 \u00E9ducation",
      "shop-pack-school-price": "159\u00A0\u20AC",
      "shop-pack-cta": "Je commande",
      "experience-title": "Une exp\u00E9rience puzzle &amp; jeu hybride",
      "experience-subtitle":
        "Trois \u00E9tapes simples pour vivre l'aventure ECOLUD \u00E0 la maison ou en atelier.",
      "experience-step1-title": "Commande ton coffret",
      "experience-step1-text":
        "Choisis la formule adapt\u00E9e \u00E0 ton foyer, re\u00E7ois un coffret pr\u00EAt \u00E0 l'emploi et active ton acc\u00E8s en ligne.",
      "experience-step2-title": "Assemble et scanne",
      "experience-step2-text":
        "Pose le puzzle sur son plateau, scanne les zones \u00E9co-responsables et d\u00E9bloque des mini-jeux immersifs.",
      "experience-step3-title": "Joue et progresse",
      "experience-step3-text":
        "Rel\u00E8ve les d\u00E9fis, cumule des points et mesure ton impact sur la communaut\u00E9 ECOLUD en temps r\u00E9el.",
      "included-title": "Ce que tu re\u00E7ois dans la bo\u00EEte",
      "included-item1-title": "Puzzle premium",
      "included-item1-text": "Pi\u00E8ces aimant\u00E9es, rev\u00EAtement recycl\u00E9 et visuels exclusifs.",
      "included-item2-title": "Application compagnon",
      "included-item2-text": "Statistiques, missions quotidiennes et tutoriels vid\u00E9o.",
      "included-item3-title": "Livret d'aventure",
      "included-item3-text": "Activit\u00E9s hors ligne, anecdotes \u00E9co et quiz pour petits &amp; grands.",
      "included-item4-title": "Objets \u00E0 planter",
      "included-item4-text": "Cartes en papier ensemenc\u00E9 et graines locales offertes.",
      "community-title": "Une communaut\u00E9 de joueurs engag\u00E9s",
      "community-subtitle":
        "Chaque coffret achet\u00E9 finance la restauration d'\u00E9cosyst\u00E8mes locaux. Suis l'\u00E9nergie de la communaut\u00E9 en direct.",
      "impact-title": "Impact \u00E0 chaque partie",
      "impact-item1": "1 coffret = 1 arbre plant\u00E9 avec Reforest'Action",
      "impact-item2": "Missions virtuelles li\u00E9es \u00E0 des ONG locales",
      "impact-item3": "Score collectif affich\u00E9 dans l'application",
      "impact-cta": "Voir notre impact",
      "testimonials-title": "Ils jouent et recommandent ECOLUD",
      "testimonial-1-text":
        "«\u00A0On a pass\u00E9 des week-ends entiers \u00E0 assembler le puzzle et \u00E0 relever les challenges. Les enfants adorent voir le score grimper.\u00A0»",
      "testimonial-1-author": "Camille, maman de deux explorateurs",
      "testimonial-2-text":
        "«\u00A0Parfait pour lancer une s\u00E9quence sur le climat : le coffret classe facilite l'animation et motive toute la salle.\u00A0»",
      "testimonial-2-author": "M. Dubois, enseignant CM2",
      "testimonial-3-text":
        "«\u00A0L'appli est super accessible et l'univers est magnifique. On garde le puzzle mont\u00E9 comme d\u00E9co\u00A0!\u00A0»",
      "testimonial-3-author": "Alicia &amp; Hugo, duo de joueurs",
      "faq-title": "Foire aux questions",
      "faq-1-question": "Quel est le d\u00E9lai de livraison ?",
      "faq-1-answer":
        "Les coffrets sont exp\u00E9di\u00E9s en 48h depuis nos ateliers lyonnais. Compte 3 \u00E0 5 jours ouvr\u00E9s selon ta r\u00E9gion.",
      "faq-2-question": "Faut-il un smartphone pour jouer ?",
      "faq-2-answer":
        "Non obligatoire : l'application enrichit l'exp\u00E9rience mais le livret propose aussi des missions hors ligne.",
      "faq-3-question": "Peut-on rejouer plusieurs fois ?",
      "faq-3-answer":
        "Oui, les missions se renouvellent chaque semaine et tu peux remettre le puzzle dans sa pochette magn\u00E9tique entre deux parties.",
      "index-title": "Bienvenue sur <span class=\"highlight\">ECOLUD</span> \u2013 Joue pour sauver la plan\u00E8te \uD83C\uDF0D",
      "index-subtitle":
        "Chaque action, puzzle ou mission restaurent notre monde. Rassemble tes amis et vois la plan\u00E8te reprendre vie en temps r\u00E9el.",
      "index-play": "Connexion / Jouer",
      "index-learn-more": "En savoir plus",
      "planet-stats-title": "\uD83C\uDF33 Plan\u00E8te vivante ECOLUD",
      "planet-progress-label": "Progression collective\u00A0:",
      "about-title": "Une aventure \u00E9cologique collaborative",
      "about-card1-title": "Plan\u00E8te vivante",
      "about-card1-text":
        "Observe la plan\u00E8te changer sous tes yeux\u00A0: for\u00EAts, oc\u00E9ans et lumi\u00E8res r\u00E9agissent \u00E0 chaque mission accomplie.",
      "about-card2-title": "Exp\u00E9rience multijoueur",
      "about-card2-text":
        "Coop\u00E8re avec ta communaut\u00E9, partage tes succ\u00E8s et vois leur impact global instantan\u00E9ment.",
      "about-card3-title": "Guid\u00E9 par Tiko",
      "about-card3-text":
        "Tiko la Tortue te guide \u00E0 travers des puzzles, mini-jeux et d\u00E9fis inspir\u00E9s des \u00E9cosyst\u00E8mes r\u00E9els.",
      "mission-title": "Des missions th\u00E9matiques pour prot\u00E9ger la Terre",
      "mission-forest-title": "For\u00EAts r\u00E9g\u00E9n\u00E9r\u00E9es",
      "mission-forest-text":
        "Assemble les puzzles botaniques pour planter des arbres virtuels et faire grimper l'indice de verdure.",
      "mission-ocean-title": "Oc\u00E9ans r\u00E9enchant\u00E9s",
      "mission-ocean-text":
        "Nettoie les littoraux gr\u00E2ce \u00E0 des mini-jeux coop\u00E9ratifs. L'eau devient plus limpide \u00E0 chaque victoire.",
      "mission-energy-title": "\u00C9nergie positive",
      "mission-energy-text":
        "R\u00E9sous des d\u00E9fis \u00E9nerg\u00E9tiques pour illuminer la plan\u00E8te et alimenter les cit\u00E9s durables.",
      "leaders-title": "Le Score \u00C9cologique",
      "eco-score-label": "Tu as actuellement :",
      "eco-score-unit": "points \uD83C\uDF0D",
      "eco-score-empty": "Commence ton aventure \u00E9cologique en achetant ton premier puzzle ! \uD83C\uDF31",
      "eco-score-message": "Continue \u00E0 jouer pour sauver la plan\u00E8te !",
      "eco-score-progress-label": "Progression vers le prochain bonus",
      "eco-score-progress-hint": "Plus que {count} puzzle(s) pour atteindre le prochain bonus !",
      "eco-score-progress-max": "Bonus atteint ! Continue \u00E0 collectionner des puzzles.",
      "eco-score-users-label": "Utilisateurs engag\u00E9s :",
      "leader-1": "Les Tortues",
      "leader-2": "Les Soleils",
      "leader-3": "Les Gouttes",
      "footer-contact": "Nous contacter",
      "footer-privacy": "Politique de confidentialit\u00E9",
      "footer-missions": "Voir les missions",
      tagline: "Aventure \u00E9cologique interactive",
      title: "Bienvenue sur <span class=\"title-highlight\">ECOLUD</span> !",
      lead: "Assemble, d\u00E9couvre et prot\u00E8ge la plan\u00E8te tout en t'amusant.",
      "avatars-title": "Choisis ton avatar",
      "profile-title": "Entre ton pr\u00E9nom",
      "profile-help": "Ton pr\u00E9nom s'affichera dans le jeu et te permettra de sauvegarder ta progression.",
      "start-button": "D\u00E9marrer l'aventure",
      "continue-profile": "Continuer avec ton profil",
      "change-profile": "Changer de profil",
      "name-placeholder": "Ton pr\u00E9nom",
      "name-modal-title": "\u26A0\uFE0F Oups !",
      "name-modal-text": "N'oublie pas d'indiquer ton pr\u00E9nom.",
      "name-modal-button": "D'accord !",
      "default-player-name": "Explorateur",
      "avatar-modal-title": "Choisis ton avatar",
      "avatar-modal-text": "S\u00E9lectionne un compagnon pour continuer l'aventure.",
      "avatar-modal-button": "J'y vais !",
      "alert_select_avatar": "Choisis ton avatar pour commencer ton aventure !",
      "choose_difficulty": "Choisis une difficult\u00E9 pour commencer.",
      "status_base": "Pi\u00E8ces bien plac\u00E9es : {correct}/{total}.",
      "status_moves": "Pi\u00E8ces bien plac\u00E9es : {correct}/{total}. Coups effectu\u00E9s : {moves}.",
      "puzzle_ready": "Ton puzzle ({total} pi\u00E8ces) est pr\u00EAt ! Clique sur deux pi\u00E8ces pour les permuter.",
      "victory_message": "Bravo ! Tu as assembl\u00E9 le puzzle en {moves} coup(s).",
      "contact-title": "Contactez-nous \uD83D\uDC9A",
      "contact-subtitle": "Une id\u00E9e, un partenariat, ou une question ? L'\u00E9quipe ECOLUD vous r\u00E9pond avec plaisir.",
      "contact-name-label": "Nom complet",
      "contact-name-placeholder": "Votre nom et pr\u00E9nom",
      "contact-email-label": "Adresse e-mail",
      "contact-email-placeholder": "exemple@ecolud.org",
      "contact-subject-label": "Objet",
      "contact-subject-default": "Choisissez une option",
      "contact-subject-partnership": "Partenariat",
      "contact-subject-feedback": "Feedback",
      "contact-subject-other": "Autre",
      "contact-message-label": "Message",
      "contact-message-placeholder": "Dites-nous tout...",
      "contact-submit": "Envoyer mon message \uD83C\uDF3F",
      "contact-direct-title": "Contact direct",
      "contact-direct-text": "\u00C9crivez-nous \u00E0 <a href=\"mailto:contact@ecolud.org\">contact@ecolud.org</a><br>Nous r\u00E9pondons sous 48&nbsp;h.",
      "contact-success": "Merci pour votre message \uD83D\uDC8C Nous revenons vers vous rapidement.",
      "game-title": "Salut explorateur\u00A0! Aide-moi \u00E0 restaurer notre monde \uD83C\uDF0D",
      "game-title-personalized":
        "Salut <span class=\"username\">{name}</span> ! Aide-moi \u00E0 restaurer notre monde \uD83C\uDF0D",
      "game-subtitle":
        "Choisis ta difficult\u00E9, assemble les pi\u00E8ces et partage ton \u00E9nergie avec toute la communaut\u00E9 ECOLUD.",
      "progress-individual": "Progression personnelle",
      "progress-collective": "Progression collective",
      "game-rewards-title": "R\u00E9compenses \u00E9cologiques",
      "game-reward-forest": "+2\u00A0% de verdure pour chaque puzzle termin\u00E9",
      "game-reward-ocean": "Nettoyage des oc\u00E9ans en temps r\u00E9el",
      "game-reward-energy": "Boost lumineux pour la plan\u00E8te",
      "level-title": "Choisis la difficult\u00E9",
      "level-easy": "Facile",
      "level-easy-text": "25 pi\u00E8ces \u2013 id\u00E9al pour commencer",
      "level-medium": "Moyen",
      "level-medium-text": "36 pi\u00E8ces \u2013 un beau d\u00E9fi",
      "level-hard": "Difficile",
      "level-hard-text": "49 pi\u00E8ces \u2013 pour les experts",
      "change-level": "Changer de difficult\u00E9",
      restart: "Rejouer",
      "about-hero-title": "Choisis ton aventure <span>&eacute;cologique</span> \uD83C\uDF33",
      "about-hero-text": "Explore nos puzzles interactifs pour prot&eacute;ger la plan&egrave;te, apprendre en t'amusant et embarquer dans des missions naturelles pleines de secrets.",
      "about-progress-title": "Progression de ta mission",
      "about-progress-status": "{value}% compl\u00E9t\u00E9",
      "about-tiko-dialog": "Salut, je suis Tiko \uD83D\uDC22&nbsp;!<br>Aide-moi \u00E0 reconstruire mon monde \uD83C\uDF0D",
      "about-mission-title": "Mission du joueur",
      "about-mission-text": "Assemble les 10 pi\u00E8ces pour r\u00E9v\u00E9ler l'image magique&nbsp;! Chaque puzzle termin\u00E9 prot\u00E8ge un \u00E9cosyst\u00E8me et te rapproche de la victoire.",
      "about-puzzle-title": "Zone de puzzle",
      "about-victory-title": "\uD83C\uDF89 Bravo explorateur&nbsp;!",
      "about-victory-text": "Tu as aid\u00E9 Tiko \u00E0 prot\u00E9ger la plan\u00E8te \uD83C\uDF0D",
      "about-replay": "Rejouer \uD83D\uDD01",
    },
    en: {
      "nav-home": "Home",
      "nav-about": "About",
      "nav-shop": "Shop",
      "nav-experience": "Experience",
      "nav-missions": "Missions",
      "nav-leaderboard": "Leaderboard",
      "nav-contact": "Contact",
      "nav-play": "Play",
      "nav-back": "Back to home",
      "header-cta": "Order the box",
      "hero-title": "Build your planet puzzle and unlock a unique play box",
      "hero-tagline":
        "Order the ECOLUD box, receive an eco-designed puzzle and unlock a universe of cooperative mini-games for the whole family.",
      "hero-cta-buy": "Order the box",
      "hero-cta-experience": "See how it works",
      "shop-title": "Pick your eco-friendly box",
      "shop-subtitle":
        "Magnetic pieces, an adventure booklet, a companion app: everything you need to play the moment it arrives.",
      "shop-pack-solo-title": "Explorer Box",
      "shop-pack-solo-text":
        "One 500-piece puzzle, full access to the ECOLUD app and solo challenge missions.",
      "shop-pack-solo-feature1": "FSC certified wood & plant-based inks",
      "shop-pack-solo-feature2": "Unlimited activation code",
      "shop-pack-solo-feature3": "Carbon-neutral shipping",
      "shop-pack-solo-price": "\u20AC39",
      "shop-pack-best": "Best seller",
      "shop-pack-duo-title": "Duo Box",
      "shop-pack-duo-text":
        "Two 500-piece puzzles, family competitions and a shared leaderboard.",
      "shop-pack-duo-feature1": "Double-sided foldable board",
      "shop-pack-duo-feature2": "Two customizable player profiles",
      "shop-pack-duo-feature3": "Access to cooperative missions",
      "shop-pack-duo-price": "\u20AC69",
      "shop-pack-school-title": "Classroom Box",
      "shop-pack-school-text":
        "Four themed puzzles, teaching guide and teacher dashboard to run workshops.",
      "shop-pack-school-feature1": "12 ready-to-play missions",
      "shop-pack-school-feature2": "Real-time collective dashboard",
      "shop-pack-school-feature3": "Dedicated education support",
      "shop-pack-school-price": "\u20AC159",
      "shop-pack-cta": "Order now",
      "experience-title": "A hybrid puzzle and game experience",
      "experience-subtitle":
        "Three simple steps to dive into the ECOLUD adventure at home or in class.",
      "experience-step1-title": "Order your box",
      "experience-step1-text":
        "Pick the plan that fits your crew, get a ready-to-play box and activate your online access.",
      "experience-step2-title": "Assemble and scan",
      "experience-step2-text":
        "Place the puzzle on its board, scan the eco zones and unlock immersive mini-games.",
      "experience-step3-title": "Play and level up",
      "experience-step3-text":
        "Take on challenges, stack points and watch your impact across the ECOLUD community in real time.",
      "included-title": "What\u2019s inside the box",
      "included-item1-title": "Premium puzzle",
      "included-item1-text": "Magnetic pieces, recycled coating and exclusive artwork.",
      "included-item2-title": "Companion app",
      "included-item2-text": "Stats, daily missions and video tutorials.",
      "included-item3-title": "Adventure booklet",
      "included-item3-text": "Offline activities, eco facts and quizzes for all ages.",
      "included-item4-title": "Plantable goodies",
      "included-item4-text": "Seeded paper cards and local seed sachets.",
      "community-title": "A community of committed players",
      "community-subtitle":
        "Each box ordered funds local ecosystem restoration. Track the community energy live.",
      "impact-title": "Impact every time you play",
      "impact-item1": "1 box = 1 tree planted with Reforest\u2019Action",
      "impact-item2": "Virtual missions tied to local NGOs",
      "impact-item3": "Collective score displayed in the app",
      "impact-cta": "Discover our impact",
      "testimonials-title": "Players love the ECOLUD experience",
      "testimonial-1-text":
        "\u201CWe spent whole weekends assembling the puzzle and acing the challenges. The kids love seeing the score climb.\u201D",
      "testimonial-1-author": "Camille, mum of two explorers",
      "testimonial-2-text":
        "\u201CIdeal to start a climate workshop: the classroom box makes facilitation easy and keeps everyone engaged.\u201D",
      "testimonial-2-author": "Mr. Dubois, 5th grade teacher",
      "testimonial-3-text":
        "\u201CThe app is super accessible and the world is gorgeous. We keep the finished puzzle on display!\u201D",
      "testimonial-3-author": "Alicia & Hugo, puzzle duo",
      "faq-title": "Frequently asked questions",
      "faq-1-question": "What are the delivery times?",
      "faq-1-answer":
        "Boxes ship within 48 hours from our Lyon workshop. Expect 3 to 5 business days depending on your location.",
      "faq-2-question": "Do I need a smartphone to play?",
      "faq-2-answer":
        "Not mandatory: the app enriches the experience but the booklet offers offline missions too.",
      "faq-3-question": "Can we replay multiple times?",
      "faq-3-answer":
        "Absolutely. Missions renew every week and the puzzle stores neatly in its magnetic sleeve between sessions.",
      "index-title": "Welcome to <span class=\"highlight\">ECOLUD</span> \u2013 Play to save the planet \uD83C\uDF0D",
      "index-subtitle":
        "Every action, puzzle or mission heals our world. Team up with friends and watch the planet revive in real time.",
      "index-play": "Log in / Play",
      "index-learn-more": "Learn more",
      "planet-stats-title": "\uD83C\uDF33 ECOLUD living planet",
      "planet-progress-label": "Global progress:",
      "about-title": "A collaborative eco adventure",
      "about-card1-title": "Living planet",
      "about-card1-text":
        "See the planet transform before your eyes: forests, oceans and lights react to every completed mission.",
      "about-card2-title": "Multiplayer experience",
      "about-card2-text":
        "Cooperate with your community, share milestones and witness the global impact instantly.",
      "about-card3-title": "Guided by Tiko",
      "about-card3-text":
        "Tiko the Turtle guides you through puzzles, mini-games and challenges inspired by real ecosystems.",
      "mission-title": "Theme missions to protect Earth",
      "mission-forest-title": "Regrowing forests",
      "mission-forest-text":
        "Complete botanical puzzles to plant virtual trees and boost the greenery index.",
      "mission-ocean-title": "Reenchanted oceans",
      "mission-ocean-text":
        "Clean shorelines through cooperative mini-games. Waters turn clearer after each victory.",
      "mission-energy-title": "Positive energy",
      "mission-energy-text":
        "Solve energy challenges to light up the planet and power sustainable cities.",
      "leaders-title": "Eco Score",
      "eco-score-label": "You currently have:",
      "eco-score-unit": "points \uD83C\uDF0D",
      "eco-score-empty": "Start your eco adventure by buying your first puzzle! \uD83C\uDF31",
      "eco-score-message": "Keep playing to save the planet!",
      "eco-score-progress-label": "Progress toward the next bonus",
      "eco-score-progress-hint": "Just {count} more puzzle(s) to reach the next bonus!",
      "eco-score-progress-max": "Bonus unlocked! Keep collecting puzzles.",
      "eco-score-users-label": "Players engaged:",
      "leader-1": "The Turtles",
      "leader-2": "The Suns",
      "leader-3": "The Drops",
      "footer-contact": "Contact us",
      "footer-privacy": "Privacy policy",
      "footer-missions": "View missions",
      tagline: "Interactive eco-adventure",
      title: "Welcome to <span class=\"title-highlight\">ECOLUD</span>!",
      lead: "Assemble, discover and protect the planet while having fun.",
      "avatars-title": "Choose your avatar",
      "profile-title": "Enter your name",
      "profile-help": "Your name will appear in the game and save your progress.",
      "start-button": "Start your adventure",
      "continue-profile": "Continue with your profile",
      "change-profile": "Switch profile",
      "name-placeholder": "Your name",
      "name-modal-title": "\u26A0\uFE0F Oops!",
      "name-modal-text": "Don't forget to enter your name.",
      "name-modal-button": "Understood!",
      "default-player-name": "Explorer",
      "avatar-modal-title": "Pick your avatar",
      "avatar-modal-text": "Choose your companion before starting the adventure.",
      "avatar-modal-button": "Let's go!",
      "alert_select_avatar": "Choose your avatar to start your adventure!",
      "choose_difficulty": "Select a difficulty to begin.",
      "status_base": "Pieces correctly placed: {correct}/{total}.",
      "status_moves": "Pieces correctly placed: {correct}/{total}. Moves made: {moves}.",
      "puzzle_ready": "Your puzzle ({total} pieces) is ready! Tap two pieces to swap them.",
      "victory_message": "Great job! You solved the puzzle in {moves} move(s).",
      "contact-title": "Contact us \uD83D\uDC9A",
      "contact-subtitle": "An idea, a partnership or a question? The ECOLUD team will be happy to help.",
      "contact-name-label": "Full name",
      "contact-name-placeholder": "Your first and last name",
      "contact-email-label": "Email address",
      "contact-email-placeholder": "example@ecolud.org",
      "contact-subject-label": "Subject",
      "contact-subject-default": "Choose an option",
      "contact-subject-partnership": "Partnership",
      "contact-subject-feedback": "Feedback",
      "contact-subject-other": "Other",
      "contact-message-label": "Message",
      "contact-message-placeholder": "Tell us everything...",
      "contact-submit": "Send my message \uD83C\uDF3F",
      "contact-direct-title": "Direct contact",
      "contact-direct-text": "Write to us at <a href=\"mailto:contact@ecolud.org\">contact@ecolud.org</a><br>We answer within 48 hours.",
      "contact-success": "Thank you for your message \uD83D\uDC8C We will get back to you shortly.",
      "about-hero-title": "Choose your <span>eco adventure</span> \uD83C\uDF33",
      "about-hero-text": "Discover interactive puzzles to protect the planet, learn through play and embark on nature-filled missions.",
      "about-progress-title": "Mission progress",
      "about-progress-status": "{value}% complete",
      "about-tiko-dialog": "Hi, I'm Tiko \uD83D\uDC22!<br>Help me rebuild my world \uD83C\uDF0D",
      "about-mission-title": "Player mission",
      "about-mission-text": "Assemble the 10 pieces to reveal the magic picture! Each finished puzzle protects an ecosystem and brings you closer to victory.",
      "about-puzzle-title": "Puzzle zone",
      "about-victory-title": "\uD83C\uDF89 Great job, explorer!",
      "about-victory-text": "You helped Tiko protect the planet \uD83C\uDF0D",
      "about-replay": "Play again \uD83D\uDD01",
      "game-title": "Hi explorer! Help me restore our world \uD83C\uDF0D",
      "game-title-personalized":
        "Hi <span class=\"username\">{name}</span>! Help me restore our world \uD83C\uDF0D",
      "game-subtitle":
        "Select your difficulty, assemble the pieces and share your energy with the entire ECOLUD community.",
      "progress-individual": "Personal progress",
      "progress-collective": "Global progress",
      "game-rewards-title": "Eco rewards",
      "game-reward-forest": "+2% greenery for every solved puzzle",
      "game-reward-ocean": "Real-time ocean cleanup",
      "game-reward-energy": "Planetary light boost",
      "level-title": "Choose your difficulty",
      "level-easy": "Easy",
      "level-easy-text": "25 pieces – perfect to start",
      "level-medium": "Medium",
      "level-medium-text": "36 pieces – a lovely challenge",
      "level-hard": "Hard",
      "level-hard-text": "49 pieces – for experts",
      "change-level": "Change difficulty",
      restart: "Play again",
    },
    es: {
      "nav-home": "Inicio",
      "nav-about": "Acerca de",
      "nav-shop": "Tienda",
      "nav-experience": "Experiencia",
      "nav-missions": "Misiones",
      "nav-leaderboard": "Clasificaci\u00F3n",
      "nav-contact": "Contacto",
      "nav-play": "Jugar",
      "nav-back": "Volver al inicio",
      "header-cta": "Pedir el cofre",
      "hero-title": "Construye tu planeta en puzzle y juega con un cofre \u00FAnico",
      "hero-tagline":
        "Pide el cofre ECOLUD, recibe un rompecabezas eco-dise\u00F1ado y desbloquea un universo de minijuegos cooperativos para toda la familia.",
      "hero-cta-buy": "Pedir el cofre",
      "hero-cta-experience": "Ver c\u00F3mo se juega",
      "shop-title": "Elige tu cofre ecol\u00F3gico",
      "shop-subtitle":
        "Piezas magn\u00E9ticas, cuaderno de aventuras, aplicaci\u00F3n para escanear: todo listo para jugar desde que llega.",
      "shop-pack-solo-title": "Cofre Explorer",
      "shop-pack-solo-text":
        "1 rompecabezas de 500 piezas, acceso a la app ECOLUD y misiones de desaf\u00EDo en solitario.",
      "shop-pack-solo-feature1": "Madera certificada FSC y tintas vegetales",
      "shop-pack-solo-feature2": "C\u00F3digo de activaci\u00F3n ilimitado",
      "shop-pack-solo-feature3": "Env\u00EDo neutro en carbono",
      "shop-pack-solo-price": "39\u00A0\u20AC",
      "shop-pack-best": "M\u00E1s vendido",
      "shop-pack-duo-title": "Cofre Duo",
      "shop-pack-duo-text":
        "2 rompecabezas de 500 piezas, competiciones familiares y marcador compartido.",
      "shop-pack-duo-feature1": "Tablero plegable de doble cara",
      "shop-pack-duo-feature2": "2 perfiles de jugador personalizables",
      "shop-pack-duo-feature3": "Acceso a misiones cooperativas",
      "shop-pack-duo-price": "69\u00A0\u20AC",
      "shop-pack-school-title": "Cofre Aula",
      "shop-pack-school-text":
        "4 rompecabezas tem\u00E1ticos, gu\u00EDa pedag\u00F3gica y panel docente para dinamizar talleres.",
      "shop-pack-school-feature1": "12 misiones listas para jugar",
      "shop-pack-school-feature2": "Panel colectivo en tiempo real",
      "shop-pack-school-feature3": "Soporte educativo dedicado",
      "shop-pack-school-price": "159\u00A0\u20AC",
      "shop-pack-cta": "Quiero pedirlo",
      "experience-title": "Una experiencia h\u00EDbrida entre puzzle y juego",
      "experience-subtitle":
        "Tres pasos sencillos para vivir la aventura ECOLUD en casa o en el aula.",
      "experience-step1-title": "Pide tu cofre",
      "experience-step1-text":
        "Elige la f\u00F3rmula adaptada a tu familia, recibe un cofre listo para usar y activa tu acceso en l\u00EDnea.",
      "experience-step2-title": "Monta y escanea",
      "experience-step2-text":
        "Coloca el rompecabezas en su tablero, escanea las zonas eco y desbloquea minijuegos inmersivos.",
      "experience-step3-title": "Juega y progresa",
      "experience-step3-text":
        "Supera los desaf\u00EDos, acumula puntos y mide tu impacto en la comunidad ECOLUD en tiempo real.",
      "included-title": "Lo que recibes en la caja",
      "included-item1-title": "Rompecabezas premium",
      "included-item1-text": "Piezas magn\u00E9ticas, acabado reciclado e ilustraciones exclusivas.",
      "included-item2-title": "Aplicaci\u00F3n compa\u00F1era",
      "included-item2-text": "Estad\u00EDsticas, misiones diarias y tutoriales en video.",
      "included-item3-title": "Cuaderno de aventura",
      "included-item3-text": "Actividades offline, curiosidades eco y cuestionarios para todos.",
      "included-item4-title": "Objetos para plantar",
      "included-item4-text": "Tarjetas de papel con semillas y sobres de semillas locales.",
      "community-title": "Una comunidad de jugadores comprometidos",
      "community-subtitle":
        "Cada cofre financia la restauraci\u00F3n de ecosistemas locales. Sigue la energ\u00EDa de la comunidad en directo.",
      "impact-title": "Impacto en cada partida",
      "impact-item1": "1 cofre = 1 \u00E1rbol plantado con Reforest'Action",
      "impact-item2": "Misiones virtuales conectadas a ONGs locales",
      "impact-item3": "Marcador colectivo visible en la aplicaci\u00F3n",
      "impact-cta": "Ver nuestro impacto",
      "testimonials-title": "Quienes juegan recomiendan ECOLUD",
      "testimonial-1-text":
        "\u00AB Pasamos fines de semana armando el puzzle y superando retos. A los ni\u00F1os les encanta ver subir la puntuaci\u00F3n. \u00BB",
      "testimonial-1-author": "Camila, mam\u00E1 de dos exploradores",
      "testimonial-2-text":
        "\u00AB Ideal para iniciar una unidad sobre el clima: el cofre aula facilita la dinamizaci\u00F3n y motiva a toda la clase. \u00BB",
      "testimonial-2-author": "Sr. Dubois, profesor de 5\u00BA",
      "testimonial-3-text":
        "\u00AB La app es muy accesible y el universo es precioso. \u00A1Dejamos el puzzle montado como decoraci\u00F3n! \u00BB",
      "testimonial-3-author": "Alicia y Hugo, equipo de juego",
      "faq-title": "Preguntas frecuentes",
      "faq-1-question": "\u00BFCu\u00E1l es el plazo de env\u00EDo?",
      "faq-1-answer":
        "Los cofres salen en 48 horas desde nuestro taller en Lyon. Calcula entre 3 y 5 d\u00EDas laborables seg\u00FAn tu regi\u00F3n.",
      "faq-2-question": "\u00BFNecesito un tel\u00E9fono para jugar?",
      "faq-2-answer":
        "No es obligatorio: la app mejora la experiencia pero el cuaderno propone misiones fuera de l\u00EDnea.",
      "faq-3-question": "\u00BFSe puede rejugar varias veces?",
      "faq-3-answer":
        "S\u00ED, las misiones se renuevan cada semana y puedes guardar el puzzle en su funda magn\u00E9tica entre partidas.",
      "index-title": "\u00A1Bienvenido a <span class=\"highlight\">ECOLUD</span>! Juega para salvar el planeta \uD83C\uDF0D",
      "index-subtitle":
        "Cada acci\u00F3n, rompecabezas o misi\u00F3n repara nuestro mundo. Une a tus amigos y observa c\u00F3mo la planeta revive en tiempo real.",
      "index-play": "Ingresar / Jugar",
      "index-learn-more": "Descubrir m\u00E1s",
      "planet-stats-title": "\uD83C\uDF33 Planeta vivo ECOLUD",
      "planet-progress-label": "Progreso colectivo:",
      "about-title": "Una aventura ecol\u00F3gica colaborativa",
      "about-card1-title": "Planeta vivo",
      "about-card1-text":
        "Observa c\u00F3mo cambia el planeta ante tus ojos: bosques, mares y luces reaccionan a cada misi\u00F3n completada.",
      "about-card2-title": "Experiencia multijugador",
      "about-card2-text":
        "Colabora con tu comunidad, comparte tus logros y observa el impacto global al instante.",
      "about-card3-title": "Guiado por Tiko",
      "about-card3-text":
        "Tiko la Tortuga te gu\u00EDa a trav\u00E9s de rompecabezas, minijuegos y desaf\u00EDos inspirados en ecosistemas reales.",
      "mission-title": "Misiones tem\u00E1ticas para proteger la Tierra",
      "mission-forest-title": "Bosques regenerados",
      "mission-forest-text":
        "Arma rompecabezas bot\u00E1nicos para plantar \u00E1rboles virtuales y aumentar el \u00EDndice de verdor.",
      "mission-ocean-title": "Oc\u00E9anos renovados",
      "mission-ocean-text":
        "Limpia las costas con minijuegos cooperativos. El agua se vuelve m\u00E1s clara tras cada victoria.",
      "mission-energy-title": "Energ\u00EDa positiva",
      "mission-energy-text":
        "Resuelve desaf\u00EDos energ\u00E9ticos para iluminar el planeta y abastecer ciudades sostenibles.",
      "leaders-title": "El puntaje ecol\u00F3gico",
      "eco-score-label": "Actualmente tienes:",
      "eco-score-unit": "puntos \uD83C\uDF0D",
      "eco-score-empty":
        "\u00A1Comienza tu aventura ecol\u00F3gica comprando tu primer rompecabezas! \uD83C\uDF31",
      "eco-score-message": "\u00A1Sigue jugando para salvar el planeta!",
      "eco-score-progress-label": "Progreso hacia el pr\u00F3ximo bono",
      "eco-score-progress-hint": "\u00A1Solo faltan {count} rompecabezas para el pr\u00F3ximo bono!",
      "eco-score-progress-max": "\u00A1Bono desbloqueado! Sigue coleccionando rompecabezas.",
      "eco-score-users-label": "Usuarios comprometidos:",
      "leader-1": "Las Tortugas",
      "leader-2": "Los Soles",
      "leader-3": "Las Gotas",
      "footer-contact": "Contactar",
      "footer-privacy": "Pol\u00EDtica de privacidad",
      "footer-missions": "Ver misiones",
      tagline: "Aventura ecol\u00F3gica interactiva",
      title: "\u00A1Bienvenido a <span class=\"title-highlight\">ECOLUD</span>!",
      lead: "Ensamble, descubre y protege el planeta mientras te diviertes.",
      "avatars-title": "Elige tu avatar",
      "profile-title": "Introduce tu nombre",
      "profile-help": "Tu nombre aparecer\u00E1 en el juego y guardar\u00E1 tu progreso.",
      "start-button": "Comenzar la aventura",
      "continue-profile": "Continuar con tu perfil",
      "change-profile": "Cambiar de perfil",
      "name-placeholder": "Tu nombre",
      "name-modal-title": "\u26A0\uFE0F \u00A1Ups!",
      "name-modal-text": "No olvides escribir tu nombre.",
      "name-modal-button": "Entendido",
      "default-player-name": "Explorador",
      "avatar-modal-title": "Elige tu avatar",
      "avatar-modal-text": "Selecciona un compa\u00F1ero antes de comenzar la aventura.",
      "avatar-modal-button": "\u00A1Vamos!",
      "alert_select_avatar": "\u00A1Elige tu avatar para comenzar la aventura!",
      "choose_difficulty": "Selecciona una dificultad para empezar.",
      "status_base": "Piezas correctas: {correct}/{total}.",
      "status_moves": "Piezas correctas: {correct}/{total}. Movimientos realizados: {moves}.",
      "puzzle_ready": "\u00A1Tu rompecabezas de {total} piezas est\u00E1 listo! Toca dos piezas para intercambiarlas.",
      "victory_message": "\u00A1Bravo! Completaste el rompecabezas en {moves} movimiento(s).",
      "contact-title": "Cont\u00E1ctanos \uD83D\uDC9A",
      "contact-subtitle": "\u00BFUna idea, una colaboraci\u00F3n o una pregunta? El equipo ECOLUD estar\u00E1 encantado de ayudarte.",
      "contact-name-label": "Nombre completo",
      "contact-name-placeholder": "Tu nombre y apellido",
      "contact-email-label": "Correo electr\u00F3nico",
      "contact-email-placeholder": "ejemplo@ecolud.org",
      "contact-subject-label": "Asunto",
      "contact-subject-default": "Elige una opci\u00F3n",
      "contact-subject-partnership": "Colaboraci\u00F3n",
      "contact-subject-feedback": "Comentarios",
      "contact-subject-other": "Otro",
      "contact-message-label": "Mensaje",
      "contact-message-placeholder": "Cu\u00E9ntanos todo...",
      "contact-submit": "Enviar mi mensaje \uD83C\uDF3F",
      "contact-direct-title": "Contacto directo",
      "contact-direct-text": "Escr\u00EDbenos a <a href=\"mailto:contact@ecolud.org\">contact@ecolud.org</a><br>Respondemos en 48 horas.",
      "contact-success": "Gracias por tu mensaje \uD83D\uDC8C Te responderemos muy pronto.",
      "about-hero-title": "Elige tu aventura <span>ecol\u00F3gica</span> \uD83C\uDF33",
      "about-hero-text": "Explora nuestros rompecabezas interactivos para proteger el planeta, aprender jugando y vivir misiones llenas de naturaleza.",
      "about-progress-title": "Progreso de tu misi\u00F3n",
      "about-progress-status": "{value}% completado",
      "about-tiko-dialog": "\u00A1Hola, soy Tiko \uD83D\uDC22!<br>Ay\u00FAdame a reconstruir mi mundo \uD83C\uDF0D",
      "about-mission-title": "Misi\u00F3n del jugador",
      "about-mission-text": "Arma las 10 piezas para revelar la imagen m\u00E1gica. Cada rompecabezas terminado protege un ecosistema y te acerca a la victoria.",
      "about-puzzle-title": "Zona de rompecabezas",
      "about-victory-title": "\uD83C\uDF89 \u00A1Bravo explorador!",
      "about-victory-text": "Ayudaste a Tiko a proteger el planeta \uD83C\uDF0D",
      "about-replay": "Jugar de nuevo \uD83D\uDD01",
      "game-title": "\u00A1Hola explorador! Ay\u00FAdame a restaurar nuestro mundo \uD83C\uDF0D",
      "game-title-personalized":
        "\u00A1Hola <span class=\"username\">{name}</span>! Ay\u00FAdame a restaurar nuestro mundo \uD83C\uDF0D",
      "game-subtitle":
        "Elige tu dificultad, arma las piezas y comparte tu energ\u00EDa con toda la comunidad ECOLUD.",
      "progress-individual": "Progreso personal",
      "progress-collective": "Progreso colectivo",
      "game-rewards-title": "Recompensas ecol\u00F3gicas",
      "game-reward-forest": "+2\u00A0% de verdor por cada rompecabezas completado",
      "game-reward-ocean": "Limpieza de oc\u00E9anos en tiempo real",
      "game-reward-energy": "Impulso de luz para el planeta",
      "level-title": "Elige la dificultad",
      "level-easy": "F\u00E1cil",
      "level-easy-text": "25 piezas \u2013 perfecto para comenzar",
      "level-medium": "Medio",
      "level-medium-text": "36 piezas \u2013 un gran desaf\u00EDo",
      "level-hard": "Dif\u00EDcil",
      "level-hard-text": "49 piezas \u2013 para expertos",
      "change-level": "Cambiar dificultad",
      restart: "Reiniciar",
    },
  };

  const storedLang = localStorage.getItem("ecolud-lang");
  let currentLang = translations[storedLang] ? storedLang : "fr";

  const translate = (key, replacements = {}) => {
    const catalog = translations[currentLang] || translations.fr;
    const fallback = translations.fr[key] || key;
    const template = (catalog && catalog[key]) || fallback;
    if (typeof template !== "string") {
      return template;
    }
    return template.replace(/\{(\w+)\}/g, (_, token) =>
      Object.prototype.hasOwnProperty.call(replacements, token) ? replacements[token] : `\{${token}}`
    );
  };

  window.translate = translate;

  const USER_STORAGE_KEY = "ecolud-user";

  const deserializeUser = (rawValue) => {
    if (!rawValue) {
      return null;
    }
    try {
      const parsed = JSON.parse(rawValue);
      if (!parsed || typeof parsed !== "object") {
        return null;
      }
      const normalized = {
        name: typeof parsed.name === "string" ? parsed.name : "",
        avatar: typeof parsed.avatar === "string" ? parsed.avatar : "",
        progress: Number.isFinite(parsed.progress) ? parsed.progress : 0,
      };
      if (!Number.isFinite(normalized.progress) || normalized.progress < 0) {
        normalized.progress = 0;
      }
      return normalized;
    } catch (error) {
      return null;
    }
  };

  const getStoredUser = () => {
    const primary = deserializeUser(localStorage.getItem(USER_STORAGE_KEY));
    if (hasCompleteProfile(primary)) {
      return primary;
    }

    const legacyRaw = localStorage.getItem("user");
    const legacy = deserializeUser(legacyRaw);
    if (hasCompleteProfile(legacy)) {
      // Synchronise automatiquement vers le nouveau stockage.
      storeUser(legacy);
      return legacy;
    }

    return primary || legacy;
  };

  const hasCompleteProfile = (user) =>
    !!(user && typeof user === "object" && user.name && user.avatar);

  const refreshNavSession = () => {
    const user = getStoredUser();
    const hasAnyProfile = !!(user && (user.name || user.avatar));
    const navBadge = document.getElementById('navPlayerBadge');
    const navAvatar = document.getElementById('navPlayerAvatar');
    const navName = document.getElementById('navPlayerName');
    const navSession = document.getElementById('navSession');
    const changeButton = document.getElementById('navChangeProfile');
    const playButton = document.getElementById('navPlayButton');
    const fallbackName = translate('default-player-name') || 'Explorateur';
    const displayName = (user?.name || '').trim() || fallbackName;

    if (navName) {
      navName.textContent = displayName;
      navName.title = displayName;
      navName.setAttribute('aria-label', displayName);
    }

    if (navAvatar) {
      if (user?.avatar) {
        navAvatar.src = user.avatar;
      }
      navAvatar.alt = `${displayName} - avatar`;
    }

    if (navBadge) {
      navBadge.classList.toggle('hidden', !hasAnyProfile);
    }

    if (navSession) {
      navSession.classList.toggle('nav-session--active', hasAnyProfile);
    }

    if (changeButton) {
      changeButton.classList.toggle('hidden', !hasAnyProfile);
    }

    if (playButton) {
      const label = translate('nav-play') || 'Jouer';
      playButton.classList.remove('hidden');
      playButton.textContent = label;
      playButton.setAttribute('href', 'game.html');
    }

    return user;
  };

  const storeUser = (user) => {
    if (!user || typeof user !== "object") {
      return;
    }
    const next = {
      name: typeof user.name === "string" ? user.name : "",
      avatar: typeof user.avatar === "string" ? user.avatar : "",
      progress: Number.isFinite(user.progress) ? Math.max(0, user.progress) : 0,
    };
    try {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(next));
      const legacyPayload = { name: next.name, avatar: next.avatar, progress: next.progress };
      localStorage.setItem("user", JSON.stringify(legacyPayload));
      if (next.avatar) {
        localStorage.setItem("selectedAvatar", next.avatar);
      } else {
        localStorage.removeItem("selectedAvatar");
      }
    } catch (error) {
      // Fallback: storage quota exceeded, we silently ignore.
    }
    refreshNavSession();
  };

  const updateStoredUser = (patch) => {
    const current = getStoredUser() || { name: "", avatar: "", progress: 0 };
    const next = { ...current, ...patch };
    storeUser(next);
    return next;
  };

  const clearStoredUser = () => {
    try {
      localStorage.removeItem(USER_STORAGE_KEY);
      localStorage.removeItem("user");
      localStorage.removeItem("selectedAvatar");
    } catch (error) {
      // Ignore storage errors.
    }
    refreshNavSession();
  };

  const navigateTo = (url) => {
    if (typeof url === "string" && url.trim()) {
      window.location.href = url;
    }
  };

  window.ecoludUser = {
    get: getStoredUser,
    set: storeUser,
    update: updateStoredUser,
    clear: clearStoredUser,
    hasProfile: hasCompleteProfile,
  };

  window.refreshNavSession = refreshNavSession;
  if (typeof window.updateDefaultPlayerName !== "function") {
    window.updateDefaultPlayerName = refreshNavSession;
  }

  const applyTranslations = () => {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (!key) return;
      el.innerHTML = translate(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (!key) return;
      el.placeholder = translate(key);
    });
  };

  const markActiveLang = (lang) => {
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      if (btn.dataset.lang === lang) {
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
      } else {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      }
    });
  };

  const getStoredProgress = () => {
    const stored = Number(localStorage.getItem("ecoludCollectiveProgress"));
    if (Number.isFinite(stored)) {
      return Math.max(0, Math.min(100, stored));
    }
    return 68;
  };

  const syncGlobalProgress = (value) => {
    const resolved = typeof value === "number" && !Number.isNaN(value) ? value : getStoredProgress();
    const progressSpan = document.getElementById("planetProgress");
    if (progressSpan) {
      progressSpan.textContent = `${resolved}%`;
    }
  };

  const setLanguage = (lang, animate = true) => {
    if (!translations[lang]) lang = "fr";
    currentLang = lang;
    localStorage.setItem("ecolud-lang", lang);
    document.documentElement.lang = lang;

    const container = document.querySelector('[data-i18n-container]');
    if (container && animate) {
      container.classList.add("language-switching");
    }

    applyTranslations();
    markActiveLang(lang);
    syncGlobalProgress();

    document.dispatchEvent(
      new CustomEvent("ecolud:language-change", { detail: { lang: currentLang } })
    );

    if (typeof window.updateDefaultPlayerName === "function") {
      window.updateDefaultPlayerName();
    }

    if (container && animate) {
      setTimeout(() => container.classList.remove("language-switching"), 200);
    }
  };

  const initLanguageSwitches = () => {
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        if (lang && lang !== currentLang) {
          setLanguage(lang);
        }
      });
    });
  };

  const initHeaderScroll = () => {
    const nav = document.querySelector('.intro-nav') || document.querySelector('.site-header');
    if (!nav) return;

    const toggle = () => {
      nav.classList.toggle("scrolled", window.scrollY > 10);
    };

    toggle();
    window.addEventListener("scroll", toggle, { passive: true });
  };

  const initPrivacyModal = () => {
    const modal = document.getElementById('privacy-modal');
    if (!modal) {
      return;
    }

    const triggers = Array.from(document.querySelectorAll('[data-privacy-trigger], #privacy-link'));
    if (!triggers.length) {
      return;
    }

    const closeBtn = document.getElementById('close-privacy');
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent && !modalContent.hasAttribute('tabindex')) {
      modalContent.setAttribute('tabindex', '-1');
    }

    let lastFocusedElement = null;

    const openModal = (event) => {
      event?.preventDefault();
      lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      modal.classList.add('is-visible');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      modalContent?.focus();
    };

    const closeModal = () => {
      modal.classList.remove('is-visible');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    };

    triggers.forEach((trigger) => {
      trigger.setAttribute('aria-haspopup', 'dialog');
      trigger.setAttribute('aria-controls', 'privacy-modal');
      trigger.addEventListener('click', openModal);
    });

    closeBtn?.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
        event.preventDefault();
        closeModal();
      }
    });
  };

  const initContactForm = () => {
    const form = document.querySelector('[data-contact-form]');
    const success = document.getElementById('form-success');
    if (!form || !success) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      success.textContent = translate('contact-success');
      success.classList.add('visible');
      form.reset();
      setTimeout(() => success.classList.remove('visible'), 5000);
    });
  };

  const initPlayTriggers = () => {
    const triggers = document.querySelectorAll('[data-play-trigger]');
    if (!triggers.length) {
      return;
    }

    const handlePlayClick = (event) => {
      event.preventDefault();
      const user = getStoredUser();
      if (hasCompleteProfile(user)) {
        navigateTo('game.html');
      } else {
        navigateTo('choose.html');
      }
    };

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', handlePlayClick);
    });
  };

  const initBackHomeButton = () => {
    const backBtn = document.querySelector('[data-back-home]');
    if (!backBtn) {
      return;
    }
    backBtn.addEventListener('click', (event) => {
      event.preventDefault();
      navigateTo('index.html');
    });
  };

  const initChoosePage = () => {
    const form = document.getElementById('profile-form');
    const nameInput = document.getElementById('player-name');
    const continueButton = document.getElementById('continue-profile');
    const avatarOptions = Array.from(document.querySelectorAll('.avatar-selection .avatar'));
    if (!form || !nameInput || !avatarOptions.length) {
      return;
    }

    const nameModal = document.getElementById('nameModal');
    const closeNameModalBtn = document.getElementById('closeNameModal');
    const avatarModal = document.getElementById('avatarModal');
    const closeAvatarModalBtn = document.getElementById('closeAvatarModal');
    const storedUser = getStoredUser();
    let selectedAvatar = storedUser?.avatar || localStorage.getItem('selectedAvatar') || null;

    if (storedUser && typeof storedUser.name === "string") {
      nameInput.value = storedUser.name;
    }
    if (storedUser && hasCompleteProfile(storedUser) && continueButton) {
      continueButton.classList.remove('hidden');
    }

    const syncAvatarSelection = () => {
      avatarOptions.forEach((option) => {
        const optionAvatar = option.dataset.avatar || "";
        option.classList.toggle('selected', optionAvatar === selectedAvatar);
      });
    };

    const openModal = (modalEl, focusTarget) => {
      if (!modalEl) {
        return false;
      }
      modalEl.classList.remove('hidden');
      modalEl.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      if (typeof focusTarget === 'function') {
        focusTarget();
      } else if (focusTarget && typeof focusTarget.focus === 'function') {
        focusTarget.focus();
      }
      return true;
    };

    const closeModal = (modalEl, onAfterClose) => {
      if (!modalEl) {
        return;
      }
      modalEl.classList.add('hidden');
      modalEl.setAttribute('aria-hidden', 'true');
      if (!document.querySelector('.modal:not(.hidden)')) {
        document.body.classList.remove('modal-open');
      }
      if (typeof onAfterClose === 'function') {
        onAfterClose();
      }
    };

    const openNameModal = () => {
      if (!openModal(nameModal, () => closeNameModalBtn?.focus())) {
        alert(translate('name-modal-text'));
      }
    };

    const closeNameModal = () => {
      closeModal(nameModal, () => nameInput.focus());
    };

    const focusAvatarOption = () => {
      const selectedOption =
        avatarOptions.find((option) => option.dataset.avatar === selectedAvatar) || avatarOptions[0];
      selectedOption?.focus();
    };

    const openAvatarModal = () => {
      if (!openModal(avatarModal, () => closeAvatarModalBtn?.focus())) {
        alert(translate('alert_select_avatar'));
      }
    };

    const closeAvatarModal = () => {
      closeModal(avatarModal, focusAvatarOption);
    };

    closeNameModalBtn?.addEventListener('click', closeNameModal);
    closeAvatarModalBtn?.addEventListener('click', closeAvatarModal);

    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') {
        return;
      }
      let handled = false;
      if (nameModal && !nameModal.classList.contains('hidden')) {
        closeNameModal();
        handled = true;
      }
      if (avatarModal && !avatarModal.classList.contains('hidden')) {
        closeAvatarModal();
        handled = true;
      }
      if (handled) {
        event.preventDefault();
      }
    });

    avatarOptions.forEach((option) => {
      const assignAvatar = () => {
        selectedAvatar = option.dataset.avatar || null;
        syncAvatarSelection();
        if (selectedAvatar) {
          localStorage.setItem('selectedAvatar', selectedAvatar);
        }
        if (avatarModal && !avatarModal.classList.contains('hidden')) {
          closeAvatarModal();
        }
      };

      option.addEventListener('click', assignAvatar);
      option.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          assignAvatar();
        }
      });
    });

    syncAvatarSelection();

    if (continueButton) {
      continueButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (hasCompleteProfile(getStoredUser())) {
          navigateTo('game.html');
        } else {
          navigateTo('choose.html');
        }
      });
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const trimmedName = nameInput.value.trim();
      if (!trimmedName) {
        openNameModal();
        return;
      }
      if (!selectedAvatar) {
        openAvatarModal();
        return;
      }

      const current = getStoredUser();
      const nextUser = {
        name: trimmedName,
        avatar: selectedAvatar,
        progress: current && Number.isFinite(current.progress) ? current.progress : 0,
      };
      storeUser(nextUser);
      navigateTo('game.html');
    });
  };

  const initGamePage = () => {
    if (!document.body.classList.contains('page-game')) {
      return;
    }

    const user = getStoredUser();
    if (!hasCompleteProfile(user)) {
      navigateTo('choose.html');
      return;
    }

    const nameLabel =
      document.getElementById('navPlayerName') || document.getElementById('playerNameLabel');
    const avatarImg =
      document.getElementById('navPlayerAvatar') || document.getElementById('playerAvatar');
    if (nameLabel) {
      nameLabel.textContent = user.name;
    }
    if (avatarImg) {
      avatarImg.src = user.avatar;
      avatarImg.alt = `${user.name} - avatar`;
    }

    document.dispatchEvent(new CustomEvent('ecolud:user-ready', { detail: { user } }));
  };

  document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitches();
    setLanguage(currentLang, false);
    initHeaderScroll();
    initPrivacyModal();
    initContactForm();
    initPlayTriggers();
    initBackHomeButton();
    initChoosePage();
    initGamePage();
    syncGlobalProgress();
    refreshNavSession();
  });

  document.addEventListener('ecolud:user-ready', () => {
    refreshNavSession();
  });

  document.addEventListener('ecolud:collective-progress', (event) => {
    const value = event.detail && typeof event.detail.value === "number" ? event.detail.value : undefined;
    syncGlobalProgress(value);
  });

  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });
})();

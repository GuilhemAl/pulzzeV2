import json
import time
from pathlib import Path
from typing import Dict, Any, List

from flask import Flask, render_template, session, request, redirect, url_for, jsonify
from flask_socketio import SocketIO, emit


BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
STATE_PATH = DATA_DIR / "players.json"

app = Flask(__name__, template_folder="templates", static_folder="static")
app.config["SECRET_KEY"] = "replace-me"
socketio = SocketIO(app, cors_allowed_origins="*")


def _default_state() -> Dict[str, Any]:
    return {
        "global_progress": 0.57,
        "players": [],
        "teams": {
            "turtles": {"name": "Les Tortues", "icon": "🐢", "color": "#2f9e44", "progress": 62},
            "suns": {"name": "Les Soleils", "icon": "☀️", "color": "#f59f00", "progress": 54},
            "drops": {"name": "Les Gouttes", "icon": "💧", "color": "#228be6", "progress": 49},
        },
        "stats": {
            "missions_today": 124,
            "co2_saved": 318,
            "active_players": 27,
            "team_leaderboard": [],
            "player_leaderboard": [],
            "avatar_usage": [],
            "live_feed": [],
        },
    }


def _ensure_state_file() -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    if not STATE_PATH.exists():
        state = _default_state()
        state["players"] = [
            {
                "id": "p1",
                "name": "Najlaa",
                "avatar": "turtle.png",
                "team": "turtles",
                "lat": 34.0209,
                "lng": -6.8416,
                "points": 42,
            },
            {
                "id": "p2",
                "name": "Kenza",
                "avatar": "sun.png",
                "team": "suns",
                "lat": 48.8566,
                "lng": 2.3522,
                "points": 38,
            },
            {
                "id": "p3",
                "name": "Imane",
                "avatar": "drop.png",
                "team": "drops",
                "lat": 35.6895,
                "lng": 139.6917,
                "points": 45,
            },
            {
                "id": "p4",
                "name": "Lina",
                "avatar": "bird.png",
                "team": "drops",
                "lat": 51.5074,
                "lng": -0.1278,
                "points": 34,
            },
            {
                "id": "p5",
                "name": "Adam",
                "avatar": "squirrel.png",
                "team": "turtles",
                "lat": 40.7128,
                "lng": -74.0060,
                "points": 27,
            },
        ]
        state["stats"]["team_leaderboard"] = [
            {"team": "turtles", "points": 169},
            {"team": "suns", "points": 152},
            {"team": "drops", "points": 143},
        ]
        state["stats"]["player_leaderboard"] = [
            {"name": "Imane", "avatar": "drop.png", "team": "drops", "points": 45},
            {"name": "Najlaa", "avatar": "turtle.png", "team": "turtles", "points": 42},
            {"name": "Kenza", "avatar": "sun.png", "team": "suns", "points": 38},
            {"name": "Lina", "avatar": "bird.png", "team": "drops", "points": 34},
            {"name": "Adam", "avatar": "squirrel.png", "team": "turtles", "points": 27},
        ]
        state["stats"]["avatar_usage"] = [
            {"avatar": "turtle.png", "count": 12},
            {"avatar": "sun.png", "count": 10},
            {"avatar": "drop.png", "count": 9},
            {"avatar": "bird.png", "count": 6},
            {"avatar": "squirrel.png", "count": 5},
        ]
        state["stats"]["live_feed"] = [
            {"message": "Najlaa a nettoyé 2 plages 🏖️ (+5 points pour Les Tortues)", "ts": time.time()},
            {"message": "Kenza a planté un arbre 🌳 (+3 points pour Les Soleils)", "ts": time.time()},
            {"message": "Imane a organisé un tri sélectif ♻️ (+4 points pour Les Gouttes)", "ts": time.time()},
        ]
        STATE_PATH.write_text(json.dumps(state, indent=2), encoding="utf-8")


def _load_state() -> Dict[str, Any]:
    _ensure_state_file()
    return json.loads(STATE_PATH.read_text(encoding="utf-8"))


def _save_state(state: Dict[str, Any]) -> None:
    STATE_PATH.write_text(json.dumps(state, indent=2), encoding="utf-8")


def _find_player(state: Dict[str, Any], player_id: str) -> Dict[str, Any]:
    for player in state["players"]:
        if player["id"] == player_id:
            return player
    raise KeyError(f"Player {player_id} not found")


def _append_live_feed(state: Dict[str, Any], message: str) -> None:
    feed: List[Dict[str, Any]] = state["stats"].setdefault("live_feed", [])
    feed.insert(0, {"message": message, "ts": time.time()})
    del feed[12:]


@app.route("/")
def index() -> Any:
    return redirect(url_for("map_view"))


@app.route("/map")
def map_view() -> Any:
    return render_template("map.html")


@app.route("/teams")
def teams_view() -> Any:
    return render_template("teams.html")


@app.route("/amis")
def stats_view() -> Any:
    return render_template("stats.html")


@app.route("/api/state")
def api_state() -> Any:
    return jsonify(_load_state())


@socketio.on("connect")
def handle_connect() -> None:
    state = _load_state()
    emit("initial_state", state)


@socketio.on("mission_completed")
def handle_mission(data: Dict[str, Any]) -> None:
    """
    data = {
        "player_id": "...",
        "team": "...",
        "points": 5,
        "mission": "Nettoyage de plage",
        "co2": 3,
        "lat": 34.0,
        "lng": -6.8
    }
    """
    state = _load_state()
    player = _find_player(state, data["player_id"])

    points = int(data.get("points", 0))
    player["points"] += points
    player["lat"] = float(data.get("lat", player["lat"]))
    player["lng"] = float(data.get("lng", player["lng"]))

    team_key = data.get("team", player["team"])
    if team_key in state["teams"]:
        team_entry = state["teams"][team_key]
        team_entry["progress"] = min(100, team_entry["progress"] + points * 2)

    state["global_progress"] = min(1.0, state["global_progress"] + points / 800)

    mission_text = data.get("mission", "Mission accomplie")
    feed_message = f"{player['name']} a complété « {mission_text} » (+{points} pts pour {state['teams'][team_key]['name']})"
    _append_live_feed(state, feed_message)

    # Rebuild leaderboards
    sorted_players = sorted(state["players"], key=lambda p: p["points"], reverse=True)
    state["stats"]["player_leaderboard"] = [
        {"name": p["name"], "avatar": p["avatar"], "team": p["team"], "points": p["points"]}
        for p in sorted_players
    ]

    team_scores: Dict[str, int] = {}
    for p in state["players"]:
        team_scores.setdefault(p["team"], 0)
        team_scores[p["team"]] += p["points"]
    state["stats"]["team_leaderboard"] = [
        {"team": key, "points": pts} for key, pts in sorted(team_scores.items(), key=lambda x: x[1], reverse=True)
    ]

    state["stats"]["missions_today"] += 1
    state["stats"]["co2_saved"] += int(data.get("co2", 0))

    # Avatar usage
    usage: Dict[str, int] = {}
    for p in state["players"]:
        usage[p["avatar"]] = usage.get(p["avatar"], 0) + 1
    state["stats"]["avatar_usage"] = [
        {"avatar": avatar, "count": count} for avatar, count in sorted(usage.items(), key=lambda i: i[1], reverse=True)
    ]

    _save_state(state)

    map_payload = {
        "player_id": player["id"],
        "name": player["name"],
        "avatar": player["avatar"],
        "team": team_key,
        "lat": player["lat"],
        "lng": player["lng"],
        "points": player["points"],
        "mission": mission_text,
    }

    socketio.emit("mission_effect", map_payload, broadcast=True)
    socketio.emit(
        "update_team_progress",
        {
            "teams": state["teams"],
            "live_feed": state["stats"]["live_feed"],
            "player": map_payload,
            "global_progress": state["global_progress"],
        },
        broadcast=True,
    )
    socketio.emit("update_stats", state["stats"], broadcast=True)


if __name__ == "__main__":
    _ensure_state_file()
    socketio.run(app, host="0.0.0.0", port=5000)

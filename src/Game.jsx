import { Scene } from "./components/Scene.jsx";
import { Player } from "./components/Player.jsx";
import { Map } from "./components/Map.jsx";
import { Controls } from "./components/Controls.jsx";
import "./Game.css"

export default function Game() {
  return (
    <div className="game">
      <Scene>
        <Player />
        <Map />
      </Scene>
      <Controls />
    </div>
  );
}

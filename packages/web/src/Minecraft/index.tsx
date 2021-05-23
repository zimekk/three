import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky, PointerLockControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./Ground";
import { Player } from "./Player";
import { Cubes } from "./Cube";
import styles from "./index.module.scss";

// https://codesandbox.io/s/minecraft-vkgi6?file=/src/App.js:0-750
function App() {
  return (
    <Canvas shadows gl={{ alpha: false }} camera={{ fov: 35 }}>
      <Sky sunPosition={[100, 10, 100]} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
      <Physics gravity={[0, -30, 0]}>
        <Ground />
        <Player />
        <Cubes />
      </Physics>
      <PointerLockControls />
    </Canvas>
  );
}

export default function () {
  const [ready, set] = useState(false);
  return (
    <>
      <App />
      {!ready && (
        <div className={styles.overlay}>
          <div>
            ← Click the dot to start
            <br />
            <span style={{ marginLeft: 18 }}>Needs fullscreen to work!</span>
          </div>
        </div>
      )}
      <div
        className={styles.dot}
        style={{ pointerEvents: ready ? "none" : "all" }}
        onClick={() => set(true)}
      />
    </>
  );
}

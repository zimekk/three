// http://philcrowther.com/WebGL/Aircraft/Pup_ocean.htm
import * as THREE from "three";
import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  CameraShake,
  Cloud,
  Environment,
  OrbitControls,
  PositionalAudio,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import styles from "./styles.module.scss";

const vector = new THREE.Vector3();

function Aircraft({ ...props }) {
  const group = useRef();

  const { scene, animations } = useGLTF(
    require("./assets/pup_flyt.glb").default
  );

  const { ref, mixer, names, actions, clips } = useAnimations(animations);

  useEffect(() => {
    actions?.propellerAction.play();
    actions?.elevatorAction.play();
    actions?.elevatorAction.setLoop(THREE.LoopPingPong);
    actions?.rudderAction.play();
    actions?.rudderAction.setLoop(THREE.LoopPingPong);
  });

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // state.camera.position.lerp(vector.set(3, 2, -3), 0.01);
    group.current.getWorldPosition(vector);
    state.camera.lookAt(vector);
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 1) / 4,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 2) / 8,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 4) / 8,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      Math.sin(t) / 3,
      0.1
    );
  });

  return (
    <group ref={group}>
      <primitive ref={ref} object={scene} scale={[0.1, 0.1, 0.1]} {...props} />;
      <PositionalAudio url={require("./assets/pup.mp3").default} />
    </group>
  );
}

const controlsConfig = {
  maxYaw: 0.01,
  maxPitch: 0.05,
  maxRoll: 0.05,
  yawFrequency: 0.8,
  pitchFrequency: 0.8,
  rollFrequency: 0.8,
};

export default function App() {
  const cameraRig = React.useRef();

  return (
    <section className={styles.Demo}>
      <Canvas>
        <Suspense fallback={null}>
          <Environment
            background
            files={[
              require("./assets/px.jpg").default,
              require("./assets/nx.jpg").default,
              require("./assets/py.jpg").default,
              require("./assets/ny.jpg").default,
              require("./assets/pz.jpg").default,
              require("./assets/nz.jpg").default,
            ]}
          />
          <Cloud width={10} length={2} position={[-10, 5, 5]} />
          <Cloud width={15} length={2} position={[10, -10, -5]} />
          <Aircraft />
          <CameraShake {...controlsConfig} ref={cameraRig} additive />
        </Suspense>
        <ambientLight intensity={0.2} />
        <pointLight castShadow intensity={1} position={[100, 10, 100]} />
        <OrbitControls screenSpacePanning={false} />
      </Canvas>
    </section>
  );
}

import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import styles from "./App.module.scss";

// https://codesandbox.io/s/floating-shoe-forked-qxjoj
// function Shoe(props) {
//   const ref = useRef();
//   // const snap = useProxy(state)
//   // Drei's useGLTF hook sets up draco automatically, that's how it differs from useLoader(GLTFLoader, url)
//   // { nodes, materials } are extras that come from useLoader, these do not exist in threejs/GLTFLoader
//   // nodes is a named collection of meshes, materials a named collection of materials
//   const { nodes, materials } = useGLTF("shoe-draco.glb");

//   // Animate model
//   useFrame((state) => {
//     const t = state.clock.getElapsedTime();
//     ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
//     ref.current.rotation.x = Math.cos(t / 4) / 8;
//     ref.current.rotation.y = Math.sin(t / 4) / 8;
//     ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
//   });

//   // Cursor showing current color
//   const [hovered, set] = useState(null);

//   const snap = {
//     items: {
//       laces: "#ffffff",
//       mesh: "hotpink",
//       caps: "#ffffff",
//       inner: "#ffffff",
//       sole: "#ffffff",
//       stripes: "#ffffff",
//       band: "#ffffff",
//       patch: "#ffffff",
//     },
//   };

//   // Using the GLTFJSX output here to wire in app-state and hook up events
//   return (
//     <group
//       ref={ref}
//       dispose={null}
//       onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
//       onPointerOut={(e) => e.intersections.length === 0 && set(null)}
//       {...props}
//     >
//       <mesh
//         geometry={nodes.shoe.geometry}
//         material={materials.laces}
//         material-color={snap.items.laces}
//       />
//       <mesh
//         geometry={nodes.shoe_1.geometry}
//         material={materials.mesh}
//         material-color={snap.items.mesh}
//       />
//       <mesh
//         geometry={nodes.shoe_2.geometry}
//         material={materials.caps}
//         material-color={snap.items.caps}
//       />
//       <mesh
//         geometry={nodes.shoe_3.geometry}
//         material={materials.inner}
//         material-color={snap.items.inner}
//       />
//       <mesh
//         geometry={nodes.shoe_4.geometry}
//         material={materials.sole}
//         material-color={snap.items.sole}
//       />
//       <mesh
//         geometry={nodes.shoe_5.geometry}
//         material={materials.stripes}
//         material-color={snap.items.stripes}
//       />
//       <mesh
//         geometry={nodes.shoe_6.geometry}
//         material={materials.band}
//         material-color={snap.items.band}
//       />
//       <mesh
//         geometry={nodes.shoe_7.geometry}
//         material={materials.patch}
//         material-color={snap.items.patch}
//       />
//     </group>
//   );
// }

// https://github.com/pmndrs/react-three-fiber/discussions/808
// https://github.com/pmndrs/react-three-fiber/discussions/490
// https://threejsfundamentals.org/threejs/lessons/threejs-load-obj.html
// https://luciopaiva.com/magicavoxel-threejs-howto/
// https://codesandbox.io/s/use-asset-dependency-70908?file=/src/App.js:111-151
function Girl(props) {
  const ref = useRef();
  const materials = useLoader(
    MTLLoader,
    require("./assets/dziewczyna/dziewczyna.mtl").default
  );
  const object = useLoader(
    OBJLoader,
    require("./assets/dziewczyna/dziewczyna.obj").default,
    (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    }
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = Math.sin(t / 1) + 3;
    }
  });

  return <primitive ref={ref} object={object} {...props} />;
}

// https://codesandbox.io/s/xvvn4vxqnz
function Boy({ parameter, ...props }) {
  const ref = useRef();
  const { scene } = useGLTF("boy.gltf");

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = Math.sin(t + 2 / 1) + 3;
    }
  });

  return <primitive ref={ref} object={scene} {...props} />;
}

function Car({ parameter, ...props }) {
  const ref = useRef();
  const { scene } = useGLTF("car.gltf");

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      Object.assign(ref.current.position, parameter);
      ref.current.rotation.y += 0.01;
    }
  });

  return <primitive ref={ref} object={scene} {...props} />;
}

function Dog({ parameter, ...props }) {
  const ref = useRef();
  const { scene } = useGLTF("dog.gltf");

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = Math.sin(t * 2) + 3;
    }
  });

  return <primitive ref={ref} object={scene} {...props} />;
}

function Plane(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1009, 1000]} />
      <shadowMaterial attach="material" color="#171717" />
    </mesh>
  );
}

function Cube(props) {
  const [ref] = useBox(() => ({
    mass: 1,
    position: [0, 5, 0],
    rotation: [0.4, 0.2, 0.5],
    ...props,
  }));
  return (
    <mesh receiveShadow castShadow ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

export default function App() {
  const ref = useRef(null);
  const [parameter, setParameter] = useState({ x: 4, y: 0, z: -3 });

  useEffect(() => {
    let frame = undefined;
    let lastCalledTime = Date.now();
    let fps = 0;
    function renderLoop() {
      let delta = (Date.now() - lastCalledTime) / 1000;
      lastCalledTime = Date.now();
      fps = 1 / delta;
      ref.current.innerText = `fps ${fps.toFixed()}`;
      frame = requestAnimationFrame(renderLoop);
    }
    renderLoop();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className={styles.App}>
      <h1>Three</h1>
      <div className={styles.Range}>
        <input
          type="range"
          min="-10"
          max="10"
          value={parameter.x}
          onChange={(e) =>
            setParameter((parameter) => ({ ...parameter, x: e.target.value }))
          }
        />{" "}
        <input
          type="range"
          min="-10"
          max="10"
          value={parameter.y}
          onChange={(e) =>
            setParameter((parameter) => ({ ...parameter, y: e.target.value }))
          }
        />{" "}
        <input
          type="range"
          min="-10"
          max="10"
          value={parameter.z}
          onChange={(e) =>
            setParameter((parameter) => ({ ...parameter, z: e.target.value }))
          }
        />{" "}
        {JSON.stringify(parameter)}
      </div>
      <div ref={ref} className={styles.Fps} />
      <Canvas
        shadowMap
        gl={{ alpha: false }}
        camera={{ position: [-1, 2, 5], fov: 50 }}
      >
        <Suspense fallback="loading...">
          <Boy
            position={[2, 0, -1]}
            rotation={[0, 3.5, 0]}
            scale={[0.1, 0.1, 0.1]}
            parameter={parameter}
          />
          <Car
            position={Object.values(parameter)}
            rotation={[0, 3.5, 0]}
            scale={[0.1, 0.1, 0.1]}
            parameter={parameter}
          />
          <Dog
            position={[2, 0, 0]}
            rotation={[0, 3.5, 0]}
            scale={[0.1, 0.1, 0.1]}
            parameter={parameter}
          />
          <Girl position={[-0.8, 0, -1]} rotation={[0, 3.5, 0]} />
          {/* <Shoe position={[-1, 2, 0]} /> */}
        </Suspense>
        <OrbitControls />
        <color attach="background" args={["lightblue"]} />
        <hemisphereLight intensity={0.35} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
        />
        <Physics>
          <Plane />
          <Cube />
          <Cube position={[0, 10, -2]} />
          <Cube position={[0, 20, -2]} />
        </Physics>
      </Canvas>
    </section>
  );
}

import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import { config, useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import niceColors from "nice-color-palettes";
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
  return <a.primitive ref={ref} object={scene} {...props} />;
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
function Plane2({ color, ...props }) {
  const [ref] = usePlane(() => ({ ...props }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry args={[1000, 1000]} />
      <meshPhongMaterial color={color} />
    </mesh>
  );
}
function Cube({ position = [0, 5, 0], ...props }) {
  const { gl, camera } = useThree();

  // const [spring, set] = useSpring(() => ({
  //   // scale: [1, 1, 1],
  //   position: position.map(Number),
  //   config: { mass: 3, friction: 40, tension: 800 }
  // }));

  const [ref] = useBox(() => ({
    mass: 1,
    // position: [0, 5, 0],
    rotation: [0.4, 0.2, 0.5],
    // ...spring,
    position,
    ...props,
  }));
  // const [spring, set] = useSpring(() => ({
  //   // scale: [1, 1, 1],
  //   position: position.map(Number),
  //   config: { mass: 3, friction: 40, tension: 800 }
  // }));
  // console.log({spring})

  // if (position) {

  //   useSpring({z: position[0], config: config.stiff, onFrame: ({z}) => {
  //     console.log({z})
  //     camera.position.z = z
  //   }
  // })
  // }
  // useEffect(() =>{
  //   console.log(position)
  //   set({position:position.map(Number)})
  // }, [position])

  return (
    <a.mesh receiveShadow castShadow ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </a.mesh>
  );
}

// function Octahedron() {
//   const [active, setActive] = useState(false)
//   const [hovered, setHover] = useState(false)
//   const vertices = [[-1, 0, 0], [0, 1, 0], [1, 0, 0], [0, -1, 0], [-1, 0, 0]]
//   const { color, pos, ...props } = useSpring({
//     color: active ? 'hotpink' : 'white',
//     pos: active ? [0, 0, 2] : [0, 0, 0],
//     'material-opacity': hovered ? 0.6 : 0.25,
//     scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
//     rotation: active ? [THREE.Math.degToRad(180), 0, THREE.Math.degToRad(45)] : [0, 0, 0],
//     config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 }
//   })
//   return (
//     <group>
//       <a.line position={pos}>
//         <geometry attach="geometry" vertices={vertices.map(v => new THREE.Vector3(...v))} />
//         <a.lineBasicMaterial attach="material" color={color} />
//       </a.line>
//       <a.mesh onClick={e => setActive(!active)} onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} {...props}>
//         <octahedronGeometry attach="geometry" />
//         <meshStandardMaterial attach="material" color="grey" transparent />
//       </a.mesh>
//     </group>
//   )
// }

function Box() {
  const args = [1, 1, 1];
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [5, 5, 0],
    args,
    isKinematic: true,
  }));
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    api.position.set(Math.sin(t * 2) * 5 + 5, 5, Math.cos(t * 2) * 5);
    api.rotation.set(Math.sin(t * 6), Math.cos(t * 6), 0);
  });
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshLambertMaterial
        attach="material"
        color="white"
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// export default function () {
// return (
//   <div>Demo1</div>
// )
// }

export default function Demo() {
  // const ref = useRef(null);
  const [parameter, setParameter] = useState({ x: 4, y: 0, z: -3 });

  useEffect(() => {
    let frame = undefined;
    function renderLoop() {
      frame = requestAnimationFrame(renderLoop);
    }
    renderLoop();
    return () => cancelAnimationFrame(frame);
  }, []);

  const colors = niceColors[1];

  return (
    <section className={styles.Demo}>
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
          <Cube position={Object.values(parameter)} />
          <Box />
        </Physics>
      </Canvas>
    </section>
  );
}

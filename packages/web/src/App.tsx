import React, {
  Suspense,
  lazy,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Canvas, useFrame } from "react-three-fiber";
// import { ContactShadows, Environment, useGLTF, OrbitControls } from "drei"
import { OrbitControls, useGLTF } from "@react-three/drei";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// import Scene from "./Scene";
// import history from "history/browser";
// import useKeyPress from "./hooks/useKeyPress";
// import { Canvas } from 'react-three-fiber'
// eslint-disable-next-line import/no-unresolved
import { Physics, usePlane, useBox } from "use-cannon";
// import create from "zustand";

import styles from "./App.module.scss";
// import { resolve } from "path";

// const SIZE = {
//   X: 10,
//   Y: 10,
// };

// const Models = {
//   characters: {
//     dziewczyna: {
//       model: require("./assets/dziewczyna/dziewczyna.obj"),
//       texture: require("./assets/dziewczyna/dziewczyna.png"),
//     },
//   },
// };

// https://codesandbox.io/s/floating-shoe-forked-qxjoj
function Shoe(props) {
  const ref = useRef();
  // const snap = useProxy(state)
  // Drei's useGLTF hook sets up draco automatically, that's how it differs from useLoader(GLTFLoader, url)
  // { nodes, materials } are extras that come from useLoader, these do not exist in threejs/GLTFLoader
  // nodes is a named collection of meshes, materials a named collection of materials
  const { nodes, materials } = useGLTF("shoe-draco.glb");

  // Animate model
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
    ref.current.rotation.x = Math.cos(t / 4) / 8;
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  // Cursor showing current color
  const [hovered, set] = useState(null);
  // useEffect(() => {
  //   const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
  //   const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
  //   document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(hovered ? cursor : auto)}'), auto`
  // }, [hovered])

  const snap = {
    items: {
      laces: "#ffffff",
      mesh: "#666666",
      caps: "#ffffff",
      inner: "#ffffff",
      sole: "#ffffff",
      stripes: "#ffffff",
      band: "#ffffff",
      patch: "#ffffff",
    },
  };

  // Using the GLTFJSX output here to wire in app-state and hook up events
  return (
    <group
      ref={ref}
      dispose={null}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      // onPointerMissed={() => (state.current = null)}
      // onPointerDown={(e) => (
      //   e.stopPropagation(), (state.current = e.object.material.name)
      // )}
      {...props}
    >
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={snap.items.laces}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={snap.items.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={snap.items.caps}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={snap.items.inner}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={snap.items.sole}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={snap.items.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={snap.items.band}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={snap.items.patch}
      />
    </group>
  );
}

// https://github.com/pmndrs/react-three-fiber/discussions/808
// https://github.com/pmndrs/react-three-fiber/discussions/490
// https://threejsfundamentals.org/threejs/lessons/threejs-load-obj.html
// https://luciopaiva.com/magicavoxel-threejs-howto/
function Girl(props) {
  const [obj, set] = useState();
  const ref = useRef();
  useMemo(() => {
    new MTLLoader().load(
      require("./assets/dziewczyna/dziewczyna.mtl").default,
      (materials) => {
        const loader = new OBJLoader();
        loader.setMaterials(materials);
        loader.load(require("./assets/dziewczyna/dziewczyna.obj").default, set);
      }
    );
  }, []);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      // ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
      // ref.current.rotation.x = Math.cos(t / 4) / 8;
      ref.current.rotation.y = Math.sin(t / 1)+3;
      // ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
      }
  });
  return obj ? <primitive ref={ref} object={obj} {...props} /> : null;
}

// https://codesandbox.io/s/em224
// const rpi = () => Math.random() * Math.PI;
// const [useStore, api] = create((set) => ({
//   amount: 0,
//   boxes: [],
//   coords: [],
//   create(amount) {
//     const ids = new Array(parseInt(amount)).fill().map((_, i) => i);
//     set({
//       amount,
//       boxes: ids,
//       coords: ids.reduce(
//         (acc, id) => ({ ...acc, [id]: [rpi(), rpi(), rpi()] }),
//         0
//       ),
//     });
//   },
//   advance(state) {
//     set((state) => {
//       const coords = {};
//       for (let i = 0; i < state.boxes.length; i++) {
//         const id = state.boxes[i];
//         const [x, y, z] = state.coords[id];
//         coords[id] = [x + 0.01, y + 0.01, z + 0.01];
//       }
//       return { ...state, coords };
//     });
//   },
// }));

// function ItemSlow({ id }) {
//   const coords = useStore(state => state.coords[id])
//   if (!coords) return null
//   return (
//     <mesh rotation={coords}>
//       <boxBufferGeometry args={[2, 2, 2]} attach="geometry" />
//       <meshNormalMaterial attach="material" />
//     </mesh>
//   )
// }

// function ItemFast({ id }) {
//   const mesh = useRef();
//   const coords = useRef([0, 0, 0]);
//   // useEffect(() => api.subscribe(xyz => (coords.current = xyz), state => state.coords[id]))
//   useFrame(() => mesh.current && mesh.current.rotation.set(...coords.current));
//   return (
//     <mesh ref={mesh}>
//       <boxBufferGeometry args={[2, 2, 2]} attach="geometry" />
//       <meshNormalMaterial attach="material" />
//     </mesh>
//   );
// }

// const Component = ItemFast;

// function ErrorBoundaries({ children }) {
//   return children;
// }

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
  // const [counter, setCounter] = useState(0);
  // const [position, setPosition] = useState(() => ({ x: 1, y: 1 }));

  const ref = useRef(null);

  // const boxes = useStore((state) => state.boxes);

  // const amount = 20;
  // const concurrent = false;
  // const transient = false;

  useEffect(() => {
    let frame = undefined;
  //   api.getState().create(amount);
    let lastCalledTime = Date.now();
    let fps = 0;
    function renderLoop() {
      let delta = (Date.now() - lastCalledTime) / 1000;
      lastCalledTime = Date.now();
      fps = 1 / delta;
      ref.current.innerText = `fps ${fps.toFixed()}`;
  //     // Change state every frame
  //     api.getState().advance();
      frame = requestAnimationFrame(renderLoop);
    }
    renderLoop();
    return () => cancelAnimationFrame(frame);
  // }, [amount, concurrent, transient]);
  }, []);

  return (
    <section className={styles.App}>
      <h1>Three</h1>
      <div ref={ref} className={styles.Fps} />
      <Canvas
        shadowMap
        gl={{ alpha: false }}
        camera={{ position: [-1, 2, 5], fov: 50 }}
      >
        <Suspense fallback="loading...">
          <Girl position={[-.8, 0, -1]} rotation={[0, 3.5, 0]} />
          <Shoe position={[-1, 2, 0]} />
        </Suspense>
        {/* <ErrorBoundaries>
          {boxes.map(id => (
            <Component key={id} id={id} />
          ))}
        </ErrorBoundaries> */}
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

import * as THREE from "three";
import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import { config, useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import niceColors from "nice-color-palettes";
import history from "history/browser";
import styles from "./App.module.scss";

const Spinner = () => <span>Loading...</span>;

const PAGES = {
  "game-1": lazy(() => import("./Game1")),
  "game-2": lazy(() => import("./Minecraft")),
  "demo-1": lazy(() => import("./Demo1")),
  "demo-2": lazy(() => import("./Demo2")),
  "demo-3": lazy(() => import("./Demo3")),
};

const getPage = (location: { hash: string }) => {
  const [path, hash = Object.keys(PAGES)[0]] =
    decodeURI(location.hash).match(/^#(.+)/) || [];
  return hash;
};

export default function App() {
  const ref = useRef(null);
  const [page, setPage] = useState(getPage(history.location));

  useEffect(() =>
    // location is an object like window.location
    history.listen(({ location, action, ...rest }) =>
      setPage(getPage(location))
    )
  );

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

  const Demo = PAGES[page] || null;

  return (
    <section className={styles.App}>
      <h1 className={styles.Nav}>
        Three
        {Object.keys(PAGES).map((page) => (
          <a key={page} href={`#${page}`}>
            {page}
          </a>
        ))}
        [{page}]
      </h1>
      <div ref={ref} className={styles.Fps} />
      <Suspense fallback={<Spinner />}>
        <Demo />
      </Suspense>
    </section>
  );
}

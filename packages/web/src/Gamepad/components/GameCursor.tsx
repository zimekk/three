import React, { useContext, useEffect, useState } from "react";
import { GamepadsContext } from "../context/GamepadsContext";
import Cursor from "../components/Cursor";

const GameCursor = () => {
  const [top, setTop] = useState(Math.round(window.innerHeight / 2));
  const [left, setLeft] = useState(Math.round(window.innerWidth / 2));
  const [pressed, setPressed] = useState(false);
  const { gamepads } = useContext(GamepadsContext);

  useEffect(() => {
    const defaultGamepad = Object.keys(gamepads).length > 0 ? gamepads[0] : {};
    if ("buttons" in defaultGamepad) {
      defaultGamepad.buttons[12].pressed && setTop((prevTop) => prevTop - 1);
      defaultGamepad.buttons[13].pressed && setTop((prevTop) => prevTop + 1);
      defaultGamepad.buttons[14].pressed && setLeft((prevLeft) => prevLeft - 1);
      defaultGamepad.buttons[15].pressed && setLeft((prevLeft) => prevLeft + 1);
      defaultGamepad.buttons[3].pressed ? setPressed(true) : setPressed(false);
    }
    if ("axes" in defaultGamepad) {
      // Each analog stick is an "axe"
      // Axes are delivered in a array of 2 numbers per axe
      // The first is left and right
      // The second is top and bottom
      // If a number is -1 or 1, it's one side or the other

      // Up
      -0.2 > defaultGamepad.axes[1] > 0.2 && setTop((prevTop) => prevTop - 1);
      // Down
      0.2 > defaultGamepad.axes[1] < 0.2 && setTop((prevTop) => prevTop + 1);
      // Left
      -0.2 > defaultGamepad.axes[0] > 0.2 && setLeft((prevTop) => prevTop - 1);
      // Right
      0.2 > defaultGamepad.axes[0] < 0.2 && setLeft((prevTop) => prevTop + 1);
    }
  }, [gamepads]);

  return <Cursor top={top} left={left} pressed={pressed} />;
};

export default GameCursor;

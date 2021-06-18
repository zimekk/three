import React from "react";

const Cursor = ({ top, left, pressed }) => {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: pressed ? "red" : "teal",
        position: "fixed",
        top,
        left,
      }}
    />
  );
};

export default Cursor;

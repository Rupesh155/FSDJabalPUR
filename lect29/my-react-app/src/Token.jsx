import React, { useState } from "react";

const Token = ({ color, position, moveToken }) => {
  return (
    <div
      onClick={() => moveToken(color)}
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: color,
        textAlign: "center",
        lineHeight: "30px",
        cursor: "pointer",
        position: "absolute",
        top: `${position}px`,
        left: `${position}px`,
      }}
    >
      {color[0].toUpperCase()}
    </div>
  );
};

export default Token;

import React from "react";

const Board = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "6fr 6fr" }}>
      <div style={{ background: "red", height: "200px", width: "200px" }}>
        Red Base
      </div>
      <div style={{ background: "blue", height: "200px", width: "200px" }}>
        Blue Base
      </div>
      <div style={{ background: "green", height: "200px", width: "200px" }}>
        Green Base
      </div>
      <div style={{ background: "yellow", height: "200px", width: "200px" }}>
        Yellow Base
      </div>
    </div>
  );
};

export default Board;

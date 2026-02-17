import React from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindow = ({ children, width="30vw", height="60vh" }) => {
  return (
    <Rnd
      default={{
    width: width, // initial width in % of viewport
    height: height,
    x: 300,
    y: 100,
  }}
  minWidth={300}    // small min so it can shrink
  minHeight={450}
  maxWidth={"90vw"} // optional
  maxHeight={"80vh"}
  bounds="parent"
  style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>wish\wishcash</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;

import React from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindow = ({ children }) => {
  return (
    <Rnd
      default={{
        width: "40vw",
        height: "62vh",
        x: 300,
        y: 100,
      }}
      minWidth={600} // minimum width in px
      minHeight={300} // minimum height in px
      maxWidth={"70vw"} // optional max width
      maxHeight={"80vh"} // optional max height
      bounds="parent" // keep window inside parent container
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

import React from "react";
import classes from "./container.module.css";

export default function Container(props) {
  return (
    <div
      style={{
        width: "95vw",
        // border: "1px solid rgba(255,255,255,.1)",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.children}
    </div>
  );
}

import React from "react";
import classes from "./column1.module.css";

export default function Column1() {
  return (
    <div className={classes.column1}>
      <div className={classes.column1Content}>
        <div className={classes.name}>
          <h1 style={{ color: "var(--mainColor)" }}>Sherwin Nofuente</h1>
          <h6 style={{ textAlign: "right" }}>Aspiring React Developer</h6>
        </div>
        <div className={classes.photo}>
          <img alt="im" src="/pics/im.png" />
        </div>
      </div>
    </div>
  );
}

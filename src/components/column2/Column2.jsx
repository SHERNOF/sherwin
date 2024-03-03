import React from "react";
import classes from "./column2.module.css";
import { FaRegLightbulb } from "react-icons/fa";
import RotatingText from "../rotating text/RotatingText";

export default function Column2() {
  return (
    <div className={classes.column2}>
      <div className={classes.col2Container}>
        <div className={classes.labelContainer}>
          <FaRegLightbulb /> About
        </div>
        <div className={classes.introContainer}>
          <h1 className={classes.intro}>
            <span style={{ color: "var(--mainColor)" }}>Sherwin Nofuente</span>,
            transforming concepts into React Application.
          </h1>
          <p>My passion is to code beautifuuly designed website.</p>
          <h2 style={{ color: "var(--mainColor)" }}>To God be the Glory...</h2>
          {/* <RotatingText></RotatingText> */}
        </div>
      </div>
    </div>
  );
}

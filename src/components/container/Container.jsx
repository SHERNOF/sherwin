import React from "react";
import classes from "./container.module.css";

export default function Container(props) {
  return (
    <div
   className={classes.container}
    >
      {props.children}
    </div>
  );
}

import React from "react";
import classes from "./column1.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Button from "../../ui/button/Button";
import { IoMdMailOpen } from "react-icons/io";

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
        <div className={classes.icons}>
          <div className={classes.iconContainer}>
            <FaFacebookF />
          </div>
          <div className={classes.iconContainer}>
            <FaPhoneAlt />
          </div>
          <div className={classes.iconContainer}>
            <FaGithub />
          </div>
        </div>
        <Button>
          <IoMdMailOpen /> Hire Me
        </Button>
      </div>
    </div>
  );
}

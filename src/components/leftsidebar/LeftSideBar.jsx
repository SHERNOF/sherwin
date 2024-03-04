import React from "react";
import classes from "./leftsidebar.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Button from "../../ui/button/Button";
import { IoMdMailOpen } from "react-icons/io";
import { FaGear } from "react-icons/fa6";

export default function LeftSideBar() {
  return (
    <div className={classes.leftsidebar}>
      <div className={classes.column1Content}>
        <div className={classes.name}>
          <h2 style={{ textAlign: "right" }}>Aspiring React Developer</h2>
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
        <div className={classes.buttonContainer}>
          <Button>
            <IoMdMailOpen /> Hire Me
          </Button>
        </div>
      </div>
      <div className={classes.gear}>
        <FaGear />
      </div>
    </div>
  );
}

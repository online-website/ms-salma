import React, { Fragment } from "react";

import classes from "./Footer.module.scss";
import success from "../../assets/success.png";
import { AiFillHeart } from "react-icons/ai";
const Footer = () => {
  return (
    <Fragment>
      <section className={classes.footer}>
        <h2>إحجز الآن وأرسم طريقك نحو النجاح</h2>
        <div className={classes["image-container"]}>
          <img src={success} alt={"success"} />
        </div>
      </section>
      <footer className={classes.buttomFooter}>
        <p>
          created by{" "}
          <a
          target="_blank"
            href="https://abdelrahman.website"
            style={{ textDecoration: "underline", color: "#886fee" }}
            rel="noreferrer"
          >
            abdelrahman ahmed
          </a>
        </p>
      </footer>
    </Fragment>
  );
};

export default Footer;

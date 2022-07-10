import React, { Fragment } from "react";
import classes from "./Hero.module.scss";
import { motion } from "framer-motion";

import lap from "../../assets/lap.png";

const Hero = (props) => {
  return (
    <section className={classes.hero}>
      <motion.div
        transition={{duration: 0.7, type: "spring"}}
        whileInView={{ x: [-100, 0],opacity: [0, 1]}}
        className={classes["hero__text-box"]}
      >
        <p>أحصل علي تجربه متميزة في تعلم  العلوم والرياضيات</p>
      </motion.div>
      <motion.div
        transition={{duration: 0.7, type: "spring"}}
        whileInView={{ x: [100, 0], opacity: [0,  1] }}
        className={classes["hero__image-box"]}
      >
        <img
          className={classes["hero__image-box__image"]}
          src={lap}
          alt="learn english"
        ></img>
      </motion.div>
    </section>
  );
};

export default Hero;

import React from 'react'
import { motion } from "framer-motion";

import classes from "./Card.module.scss"

const Card = ({image, text, odd = false}) => {
  const transformArray = odd ? [-100, 0] : [100, 0]
  
  return (
    <motion.div 
    transition={{duration: 0.7, type: "spring"}}
    whileInView={{ x: transformArray ,opacity: [0, 1]}}
    className={classes.card}>
      <div className={classes["card__image-box"]}>
        <img src={image} alt="interactive eduation experience" />
      </div>
      <div className={["card__text-box"]}>
        <p>{text}</p>
      </div>
    </motion.div>
  )
}

export default Card;
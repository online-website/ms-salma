import React from 'react'

import classes from "./Nav.module.scss";
import {FiFacebook} from "react-icons/fi";
import {AiOutlineWhatsApp} from "react-icons/ai";
import logo from "../../assets/logo.png"

const Nav = () => {
  return (
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <img src={logo} alt="logo"/>
        </div>
        <ul className={classes["nav__social"]}>
        <AiOutlineWhatsApp className={`${classes["nav__social--facebook"]} ${classes["nav__social--icon"]}`}/>
        <FiFacebook  className={`${classes["nav__social--facebook"]} ${classes["nav__social--icon"]}` } />
        </ul>
      </nav>
  )
}

export default Nav
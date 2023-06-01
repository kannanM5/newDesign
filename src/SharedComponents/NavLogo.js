import React from "react";
import logo from "../Assests/Svg/raw_logo.1bf67b47.svg";
import classes from "../styles.module.css";

const NavLogo = () => {
  return (
    <div className={classes.navLogo}>
      <div>
        <img className={classes.imgLogo} src={logo} alt="logo" />
      </div>
      <div>
        <button className={classes.signIn}>Sign in</button>
        <button className={classes.signUp}>SignUp</button>
      </div>
    </div>
  );
};

export default NavLogo;

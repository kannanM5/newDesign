import React from "react";
import HeaderComponent from "../../SharedComponents/Navbar";
import classes from "../../styles.module.css";
import nuggets from "../../Assests/Svg/login_nuggets.07431cf0.svg";

export default function SignIn() {
  return (
    <div>
      <HeaderComponent />
      <div className={classes.signIn}>
        <div className={classes.welcome}>1</div>
        <div className={classes.nuggets}>
          <img src={nuggets} alt="nugget" />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles.module.css";

const HeaderComponent = () => {
  return (
    <div className={classes.header}>
      <div className={classes.links}>
        <Link to="/">Join a meeting</Link>
        <Link>Host a meeting</Link>
        <Link>Download</Link>
        <Link>Support</Link>
        <Link>FAQs</Link>
      </div>
    </div>
  );
};

export default HeaderComponent;

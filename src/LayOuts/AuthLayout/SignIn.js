import React from "react";
import HeaderComponent from "../../SharedComponents/Navbar";
import classes1 from "../AuthLayout/Auth.module.css";
import logo from "../../Assests/Svg/raw_logo.1bf67b47.svg";
import logoIcon from "../../Assests/Images/logoIcon.png";
import nuggets from "../../Assests/Images/nuggets.png";
export default function SignIn() {
  return (
    <div>
      <HeaderComponent />
      <div className={classes1.signIn}>
        <div className={classes1.welcome}>
          <div className={classes1.login}>
            <img className={classes1.logo} src={logo} alt="logo" />
            <h3>Welcome to Rawcaster</h3>
            <p className={classes1.welcomePara}>
              Log in now to access the latest insights, experience for your
              social media performance.
            </p>

            <div className={classes1.input}>
              <label htmlFor="email">Email address</label>
              <br />
              <input type="text" placeholder="John@gmail.com" />
            </div>
            <div className={classes1.input}>
              <label htmlFor="email">Password</label> <br />
              <input type="text" placeholder="Password" />
            </div>
            <div>
              <span className={classes1.forgotPassword}>Forgot Password?</span>
              <button className={classes1.signInBtn}>Sign in</button>
              <p className={classes1.notRegisterd}>
                Not registered yet? <span>Create an Account</span>
              </p>
              <div className={classes1.conditions}>
                <div>
                  <img src={logoIcon} alt="logoIcon" />
                </div>
                <div>
                  <p>© Copyright Rawcaster 2021</p>
                  <button className={classes1.button}>
                    Terms and Conditions
                  </button>
                  |<button className={classes1.button}> Privacy Policy</button>|
                  <button className={classes1.button}>Cookies Policy</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes1.nuggets}>
          <div className={classes1.content}>
            <img src={nuggets} alt="nugget" />
            <h2>Post Nuggets</h2>
            <p>
              These are small pieces or tidbit of thoughts in your mind or an
              image (video or picture) that you want to share with one or more
              connected persons.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

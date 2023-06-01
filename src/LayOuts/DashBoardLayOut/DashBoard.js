import React from "react";
import classes from "../../styles.module.css";
import HeaderComponent from "../../SharedComponents/Navbar";
import NavLogo from "../../SharedComponents/NavLogo";
import poster1 from "../../Assests/Svg/header-img.78bab20a.svg";
import poster2 from "../../Assests/Images/live-talk-show.055fe384.jpeg";
import icon from "../../Assests/Svg/Fav-Rawcaster.548c39b1.svg";
import poster3 from "../../Assests/Images/Events.51d2c7b7.jpeg";

export default function DashBoard() {
  return (
    <>
      <HeaderComponent />
      <NavLogo />

      <div className="container m-5">
        <div className={`row ${classes.section1}`}>
          <div className={`col-md-6 ${classes.leftSection1}`}>
            <h1>
              The one-stop platform <br />
              for all your social media <br /> needs
            </h1>
            <p>
              The first platform that gives you a space to chat, talk, host and
              participate in live events virtually and at the same time allows
              you to share with the whole world, very small pieces or tidbit of
              treasures in your mind.
            </p>
            <button>Get Started for Free</button>
          </div>

          <div className={`col-md-6 ${classes.rightSection1}`}>
            <img className={classes.poster1} src={poster1} alt="poster" />
          </div>
        </div>

        <div className={`row ${classes.section2}`}>
          <div className={`col-md-5 ${classes.leftSection2}`}>
            <img className={classes.poster2} src={poster2} alt="poster" />
          </div>

          <div className={`col-md-5 ${classes.rightSection2}`}>
            <img className={classes.icon} src={icon} alt="icon" />
            <h2>Live Talk Show</h2>
            <p>
              As in a typical TV or Radio talk show, you can stream a live event
              with the Rawcaster public or your fans with live audience
              reactions on the event. Participants are only on listen mode but
              can be enabled by host to speak or ask a question at any time.
              Rawcaster allows you to host this event in either audio only or
              video.
            </p>
            <p>
              When the occasion calls for it, you can also capture and stream a
              live event with the click of a button.
            </p>
            <button className={classes.getStarted}>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className={`row ${classes.section2}`}>
          <div className={`col-md-6 ${classes.rightSection2}`}>
            <img className={classes.icon} src={icon} alt="icon" />
            <h2>Events</h2>
            <p>
              Take your scheduled events live to your invited guests or make it
              open to the public whether they are members of Rawcaster or not.
              It is as simple as sharing the event link to anyone you want to
              participate.
            </p>
            <p>
              Rawcaster allows you to configure your meeting to either allow
              anyone to join or restrict it to a select few. Break out rooms,
              schmoozing, online chats, voting are some of the features
              Rawcaster provides with this feature.
            </p>
            <button className={classes.getStarted}>Get Started</button>
          </div>
          <div className={`col-md-6 ${classes.rightSection1}`}>
            <img className={classes.poster2} src={poster2} alt="poster" />
          </div>
        </div> */
}

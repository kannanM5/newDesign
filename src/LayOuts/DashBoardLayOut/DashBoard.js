import React from "react";
import classes from "../../styles.module.css";
import HeaderComponent from "../../SharedComponents/Navbar";
import NavLogo from "../../SharedComponents/NavLogo";
import poster1 from "../../Assests/Svg/header-img.78bab20a.svg";
import poster2 from "../../Assests/Images/live-talk-show.055fe384.jpeg";
import icon from "../../Assests/Svg/Fav-Rawcaster.548c39b1.svg";
import poster3 from "../../Assests/Images/Events.51d2c7b7.jpeg";
import poster4 from "../../Assests/Images/post-nuggets.3f8aa0f5.jpeg";
import img1 from "../../Assests/Images/nuggets.7825aca3.jpeg";
import img2 from "../../Assests/Images/event-hosting.6eff08ee.jpeg";
import img3 from "../../Assests/Images/live-chat.8da6d245.jpeg";
import Big from "../../Assests/Images/rawcaster_window.png";
import william from "../../Assests/Svg/william.8a3097f5.svg";
import ilakiya from "../../Assests/Images/pro_img.png";
import jones from "../../Assests/Images/ngozijones.png";
import abel from "../../Assests/Images/abel.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import owner from "../../Assests/Images/profile-img.3273bc86.png";
import element from "../../Assests/Svg/bg-elemtns.77a09de3.svg";
import heading from "../../Assests/Svg/triangle.svg";
import download from "../../Assests/Images/download-app.png";
import ricon from "../../Assests/Images/ricon.png";
import playstore from "../../Assests/Images/play-store.png";
import appstore from "../../Assests/Images/app-store.png";
import footerLogo from "../../Assests/Svg/raw_logo.1bf67b47.svg";

export default function DashBoard() {
  return (
    <>
      <HeaderComponent />
      <NavLogo />

      <div className={classes.content}>
        <div className={classes.section1}>
          <div className={classes.leftSection1}>
            <h1>
              The one-stop <span>platform </span>
              <br />
              for all your social media <br /> needs
            </h1>
            <p>
              The first platform that gives you a space to chat, talk, host and
              participate in live events virtually and at the same time allows
              you to share with the whole world, very small pieces or tidbit of
              treasures in your mind.
            </p>
            <button className={classes.btn1}>Get Started for Free</button>
          </div>

          <div className={classes.rightSection1}>
            <img className={classes.poster1} src={poster1} alt="poster" />
          </div>
        </div>
        <div className={classes.section2}>
          <div className={classes.leftSection2}>
            <img className={classes.poster2} src={poster2} alt="poster" />
          </div>

          <div className={classes.rightSection2}>
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
            <button className={classes.blueBtn}>Get Started</button>
          </div>
        </div>
        <div className={classes.section3}>
          <div className={classes.leftSection3}>
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
            <button className={classes.blueBtn}>Get Started</button>
          </div>
          <div className={classes.rightSection3}>
            <img className={classes.poster2} src={poster3} alt="poster" />
          </div>
        </div>
        <div className={classes.section2}>
          <div className={classes.leftSection2}>
            <img className={classes.poster2} src={poster4} alt="poster" />
          </div>

          <div className={classes.rightSection2}>
            <img className={classes.icon} src={icon} alt="icon" />
            <h2>Post Nuggets</h2>
            <p>
              Share the precious thoughts and tidbits that are in your mind with
              your fans, special connections, or the public. Add some videos or
              photos to convey your message.
            </p>
            <p>
              Nuggets are probably your best tool to make new fans. As you post
              interesting Nuggets, you create appetite for your readers and they
              would want to follow you along.
            </p>
            <button className={classes.blueBtn}>Get Started</button>
          </div>
        </div>
        <div className={classes.subTitle}>
          <h2>One platform, endless potential</h2>
          <p>
            with Rawcaster Influencers, bloggers, writers, photographers can{" "}
            <br />
            collaborate with their fans easily
          </p>
        </div>

        <div className={classes.section5}>
          <div className={classes.content}>
            <img src={img1} alt="nugget" />
            <h4>Nuggets</h4>
            <p>
              These are small pieces or tidbit of thoughts in your mind or an
              image (video or picture) that you want to share with one or more
              connected persons.
            </p>
          </div>
          <div className={classes.content}>
            <img src={img2} alt="nugget" />
            <h4>Event Hosting</h4>
            <p>
              From the comfort of your home to when you are on the road;
              Rawcaster allows you to host or attend important events and
              meetings like you were there.
            </p>
          </div>
          <div className={classes.content}>
            <img src={img3} alt="nugget" />
            <h4>Live Chatting</h4>
            <p>
              Chat allows you to have an end-to-end encrypted conversation by
              text, video or audio with one or more people at the same time.
            </p>
          </div>
        </div>

        <div className={classes.subTitle}>
          <button className={classes.belowBtn}>Get Started</button>
        </div>
        <div className={classes.subTitle}>
          <h2>Rawcaster unique features</h2>
          <p>
            The first platform that gives you a space to chat, talk, host <br />
            and participate in live events virtually
          </p>
        </div>

        <div className={classes.largeLogo}>
          <img src={Big} alt="logo" />
        </div>
        <div className={classes.subTitle}>
          <h2>Happy users around the globe</h2>
          <p className={classes.caroselaA}>
            The first platform that gives you a space to chat, talk, host <br />
            and participate in live events virtually
          </p>

          <MyComponent />

          <div className={classes.welcomeMessage}>
            <img className={classes.owner} src={owner} alt="welcome" />
            <img className={classes.element} src={element} alt="welcome" />
            <p>
              <img className={classes.heading} src={heading} alt="logo" />
              <br />
              <br />
              "Rawcaster is a platform created to appeal to young and educated
              people whose lifestyle, activities and social profile give them
              influence over many others who look to them as role models.
              Rawcaster is built to offer these influencers every tool they need
              to interact with their fans and for the fans to interact with each
              other"
              <br />
              <br />- David (Co-founder)
            </p>
          </div>

          <div className={classes.mobileApp}>
            <div className={classes.leftSection}>
              <img src={download} alt="mobile" />
            </div>
            <div className={classes.rightSection}>
              <img src={ricon} alt="ricon" />
              <h4>Download Apps</h4>
              <p>
                Please download the Rawcaster app from Google Play store and APP
                store.
              </p>
              <img className={classes.appstore} src={appstore} alt="appstore" />
              <img
                className={classes.playstore}
                src={playstore}
                alt="playstore"
              />
            </div>
          </div>
          <div className={classes.tryOut}>
            <div className={classes.subTitle}>
              <h2>Are you Ready to try out Rawcaster?</h2>
              <p>
                Start scaling your customer support, and, collaborate better
                with <br />
                your team
              </p>
              <button className={classes.belowBtn}>Get Started</button>
            </div>
          </div>
        </div>
        <div className={classes.footer}>
          <div className={classes.footerimg}>
            <img src={footerLogo} alt="footer" />
          </div>
          <div className={classes.footerbtn}>
            <button className={classes.belowBtn}>Contact Support</button>
          </div>
        </div>
        <hr />

        <div className={classes.footerNavigation}>
          <button>Terms and Conditions</button>
          <button>Privacy Policy</button>
          <button>Support</button>
          <button>Cookies Policy</button>
        </div>
      </div>
    </>
  );
}

function MyComponent() {
  return (
    <>
      <div className={classes.reviewPersons}>
        <Carousel
          ariaLabel
          infiniteLoop={true}
          showStatus={false}
          emulateTouch={true}
          swipeable={true}
          selectedItem={4}
          showIndicators={false}
          showArrows={false}
          width={1200}
          centerMode={true}
          centerSlidePercentage={44}
        >
          <div className={classes.review}>
            <p>
              Rawcaster is the epitome of what a social media platform should be
              and poised to take the world by storm. By taking the best features
              of existing social media platforms and putting all in one platform
              is a brilliant idea.
            </p>
            <div className={classes.title}>
              <div>
                <img className={classes.person} src={william} alt="william" />
              </div>
              <div>
                <h6>William Sagoe</h6>
              </div>
            </div>
          </div>

          <div className={classes.review}>
            <p>
              This is highly commendable. And should be made to go viral.
              However, I would like to suggest that a video presentation be made
              to show how the app works.
            </p>
            <div className={classes.title}>
              <div>
                <img className={classes.person} src={abel} alt="william" />
              </div>
              <div>
                <h6>Ngozi Jones</h6>
              </div>
            </div>
          </div>

          <div className={classes.review}>
            <p>
              Rawcaster is amazing! Because it combines many tools in a single
              platform. Anyone who wants to influence others or communicate
              better with others should have it.
            </p>
            <div className={classes.title}>
              <div>
                <img className={classes.person} src={jones} alt="william" />
              </div>
              <div>
                <h6>Abel Consiglio</h6>
              </div>
            </div>
          </div>

          <div className={classes.review}>
            <p>
              Rawcaster is a great application that acts as an all in one
              platform. This will be a big hit with both general and
              professional users to interact. Additionally, events will allow
              users from different locations to come together and celebrate.
            </p>
            <div className={classes.title}>
              <div>
                <img className={classes.person} src={ilakiya} alt="william" />
              </div>
              <div>
                <h6>Elakkiya Manivannan</h6>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}

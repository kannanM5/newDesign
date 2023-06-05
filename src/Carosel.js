import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import william from "./Assests/Svg/william.8a3097f5.svg";
import ilakiya from "./Assests/Images/pro_img.png";
import jones from "./Assests/Images/ngozijones.png";
import abel from "./Assests/Images/abel.png";
import classes from "./styles.module.css";

const DemoCarousel = () => {
  return (
    <div className={classes.reviewPersons}>
      <Carousel
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
              <img src={william} alt="william" />
            </div>
            <div>
              <h6>William Sagoe</h6>
            </div>
          </div>
        </div>

        <div className={classes.review}>
          <p>
            This is highly commendable. And should be made to go viral. However,
            I would like to suggest that a video presentation be made to show
            how the app works.
          </p>
          <div className={classes.title}>
            <div>
              <img src={abel} alt="william" />
            </div>
            <div>
              <h6>Ngozi Jones</h6>
            </div>
          </div>
        </div>

        <div className={classes.review}>
          <p>
            Rawcaster is amazing! Because it combines many tools in a single
            platform. Anyone who wants to influence others or communicate better
            with others should have it.
          </p>
          <div className={classes.title}>
            <div>
              <img src={jones} alt="william" />
            </div>
            <div>
              <h6>Abel Consiglio</h6>
            </div>
          </div>
        </div>
        <div className={classes.review}>
          <p>
            Rawcaster is a great application that acts as an all in one
            platform. This will be a big hit with both general and professional
            users to interact. Additionally, events will allow users from
            different locations to come together and celebrate.
          </p>
          <div className={classes.title}>
            <div>
              <img src={ilakiya} alt="william" />
            </div>
            <div>
              <h6>Elakkiya Manivannan</h6>
            </div>
          </div>
        </div>
        <div className={classes.review}>
          <p>
            Rawcaster is the epitome of what a social media platform should be
            and poised to take the world by storm. By taking the best features
            of existing social media platforms and putting all in one platform
            is a brilliant idea.
          </p>
          <div className={classes.title}>
            <div>
              <img src={william} alt="william" />
            </div>
            <div>
              <h6>William Sagoe</h6>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default DemoCarousel;

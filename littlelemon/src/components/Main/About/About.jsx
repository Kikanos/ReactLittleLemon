import React from "react";
import { AppWrap } from "../../../wrapper";
import "./About.css";
import { images } from "../../../constants";

const aboutData = {
  title: "Little Lemon",
  subTitle: "Algeria",
  description: `When dining in an Algerian restaurant, you can expect warm hospitality and an opportunity to savor the diverse flavors of this North African cuisine. Be sure to try a variety of dishes and desserts to fully appreciate the culinary richness of Algeria. `,
  image1: images.MarioandAdrianA,
  image2: images.resturantChefB,
};
const About = () => {
  return (
    <div className="app_about-section">
      <div className="app_about-description-box">
        <h1 className="app__about-title">{aboutData.title}</h1>
        <br />
        <h4 className="app__about-subtitle">{aboutData.subTitle}</h4>
        <br />
        <p className="app__about-description">
          {aboutData.description}
          <br />
        </p>
      </div>

      <div className="app__about-image-holder">
        <div
          className="app__about-image-box img-box-1"
          style={{
            backgroundImage: `url(${aboutData.image2})`,
          }}
        />
        <div
          className="app__about-image-box img-box-2"
          style={{
            backgroundImage: `url(${aboutData.image1})`,
          }}
        />
      </div>
      {/* </div> */}
    </div>
  );
};

export default AppWrap(About, "About", "app__about");

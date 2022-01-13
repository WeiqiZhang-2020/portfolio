import React from "react";
import Social from "../Social";

const heroContent = {
  shapeImage: "hero-shape",
  heroImage: "tomshort",
  name: "Tom Zhang",
  description: `I'm a Front-end React Developer with over 5 years of professional experience in designing useful and approachable UI.`,
};

const Hero = () => {
  return (
    //    HERO
    <div className="edina_tm_hero" id="home">
      <div className="content">
        <div className="img-shape" data-aos="fade-up" data-aos-duration="1200">
          <img
            src={`img/hero/${heroContent.shapeImage}`}
            srcSet={`img/hero/${heroContent.heroImage}.jpg`}
            alt="hero image"
          />
        </div>
        <div className="extra">
          <h1
            className="name"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            {heroContent.name}
          </h1>
          <p
            className="text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            {heroContent.description}
          </p>

          <div
            className="social"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            {/* <Social /> */}
          </div>
          <div
            className="edina_tm_button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
          </div>
        </div>
      </div>
    </div>
    // /HERO
  );
};

export default Hero;

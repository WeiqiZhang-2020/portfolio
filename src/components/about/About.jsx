import React, { useState } from "react";
import Skills from "../skills/Skills";
import Modal from "react-modal";
import ModalContent from "./modal/ModalContent";

Modal.setAppElement("#root");

const About = () => {

  return (
    //    ABOUT
    <div className="edina_tm_about" id="about">
      <div className="container">
        <div className="about_title">
          <h3>About Me</h3>
        </div>
        <div className="content">
          <div
            className="leftpart"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="info">
              <h3>
                Hi, I'm <span>Tom Zhang</span>
              </h3>
              <p>
                I'm a Front-end Developer with 5 years of professional experience in designing useful
                and approachable UI. I'm from Shanghai. I am a quick learner and a problem solver. I
                am always willing to learn new technology and explore new ways to solve problems.
              </p>
            </div>
            <div className="my_skills">
              <h3 className="title">What is my skill level?</h3>
              <p className="desc">
                I have a decent understanding of JavaScript, TypeScript, jQuery, HTML, and CSS.  I am
                strong expertise in using the MERN stack which is MongoDB, Express, React, Node.js to
                build modern web applications. I also familiar with most of the testing tools, like Jest,
                Mocha, Chai, Postman.
              </p>
              <div className="wrapper">
                <div className="dodo_progress">
                  <Skills />
                </div>
              </div>

            </div>
          </div>
          {/* End leftpart */}

          <div className="rightpart">
            <div className="image">
              <img src="img/thumbs/26-35.jpg" alt="thumb" />

              <div
                className="main"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + "img/about/tomlong.jpg"
                    })`,
                }}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              ></div>

              <div
                className="experience"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="info">
                  <h3>5+ Years</h3>
                  <span>Of Experiance</span>
                </div>
              </div>
            </div>
          </div>
          {/* End righttpart */}
        </div>
      </div>

      {/* Start About Details Modal */}

      {/* End  About Details Modal */}
    </div>
    // /ABOUT
  );
};

export default About;

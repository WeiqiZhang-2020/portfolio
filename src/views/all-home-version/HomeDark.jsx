import React from "react";
import Sidebar from "../../components/header/Sidebar";
import Hero from "../../components/slider/Hero";
import About from "../../components/about/About";
import Blog from "../../components/blog/Blog";
import Contact from "../../components/Contact";
import Address from "../../components/Address";
import AnimatedCursor from "react-animated-cursor";

const HomeDark = () => {
  document.body.classList.add("dark");
  return (
    <div className="home-light edina_tm_mainpart">
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="221, 221, 221"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.4}
      />
      <Sidebar />
      {/* End Header */}
      <Hero />
      {/* End Hero */}
      <About />
      {/* End Hero */}



      <div className="edina_tm_news" id="blog">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Blog</h3>
            <p>
              All About Platform
            </p>
          </div>
          {/* End edian_tm_title */}
          <Blog />
        </div>
      </div>
      {/* End Blog */}

      <div className="edina_tm_contact" id="contact">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Contact</h3>
            <p>
              Contact infomation showing bellow.
            </p>
          </div>
          <div className="extra_info">
            <Address />
          </div>
          {/* End Address Info */}
        </div>
      </div>
    </div>
  );
};

export default HomeDark;

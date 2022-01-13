import React from "react";
import Social from "../../Social";

const ModalTwo = () => {
  return (
    <div className="description_wrap scrollable">
      <div className="image">
        <img src="/img/placeholders/4-3.jpg" alt="thumb" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "img/news/econ.png"
              })`,
            backgroundSize: "contain",
          }}
        ></div>
      </div>
      {/* End image */}

      <div className="news_details">
        <span>
          November, 2016 <a href="#">eConsent</a>
        </span>
        <h3 className="title"> eConsent</h3>
      </div>
      {/* End details */}
      <div className="main_content">
        <div className="descriptions">
          <p>
            eConsent not only enables remote consenting, accelerating the patient screening and enrollment process, but also enhances patient comprehension resulting in increased retention, trial efficiencies and cost savings.  It’s why 59% of clinical trial investigators expect eConsent adoption to increase post-Covid-
            19.  Patient access to clinical research with a modern eConsent platform that delivers an engaging,
            flexible and scalable user experience can be vastly optimized by enhancing access and knowledge with engaging multimedia capabilities including knowledge checks, videos, diagrams and visual imagery, removing access barriers by facilitating a remote eConsent process combined with a unified televisit workflow, compliant with country-specific regulations, and advancing global access and inclusion by consenting patients on a web-based platform accessible from any device for multiple signatories.

          </p>
        </div>
        {/* End description */}

      </div>
    </div>
  );
};

export default ModalTwo;

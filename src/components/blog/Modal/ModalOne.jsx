import React from "react";
import Social from "../../Social";

const ModalOne = () => {
  return (
    <div className="description_wrap scrollable">
      <div className="image">
        <img src="/img/placeholders/4-3.jpg" alt="thumb" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "img/news/retire.png"})`,
            backgroundSize: "contain",
          }
          }
        ></div>
      </div>
      {/* End image */}

      <div className="news_details">
        <span>
          August,2020 <a href="#">Retirement Plans Management Platform</a>
        </span>
        <h3 className="title">Retirement Plans Management Platform</h3>
      </div>
      {/* End details */}

      <div className="main_content">
        <div className="descriptions">
          <p>
            Human Interest makes it easy and affordable to help company employees save for retirement. With the Retirement Plans Management Platform, both employers and employees can take advantage of its convenient features to manage retirement plans efficiently and easily. Employers can sync to seamlessly integrate with 100+ payrolls to eliminate the burden of processing employee contributions. Companies will never need to worry about IRS or DOL reporting or compliance – the platform can handle all of that for you. The Platform can also help employers choose low-cost, diversified funds for their company’s plan (self-directed options are also available), with a 360-degree view of the plan from the admin dashboard, view reports, and see which employees have joined. For employees, they can easily check their balance, change contributions, and update portfolio preferences. It’s so easy, we see 2x the industry average participation rate.

          </p>
        </div>
        {/* End description */}

      </div>
    </div>
  );
};

export default ModalOne;

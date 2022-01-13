import React from "react";
import Social from "../../Social";

const ModalThree = () => {
  return (
    <div className="description_wrap scrollable">
      <div className="image">
        <img src="/img/placeholders/4-3.jpg" alt="thumb" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "img/news/click.png"
              })`,
            backgroundSize: "contain",
          }}
        ></div>
      </div>
      {/* END IMAGE */}
      <div className="news_details">
        <span>
          May, 2018 <a href="#">Accounting Management Platform
          </a>
        </span>
        <h3 className="title">Accounting Management Platform</h3>
      </div>
      {/* End details */}
      <div className="main_content">
        <div className="descriptions">
          <p>
            The ClickUp Accounting Management Platform simplified accounting all in one place. Users can track and manage clients, accounts, and create shareable reports with ClickUp’s powerful work management tools for accounting firms. The platform includes Client Dashboards, Automations Reminders, Detailed Reporting, Time Resource Tracking, etc. Users can track client budgets with versatile spreadsheets, and manage budgets and accounts with lightning-fast spreadsheets that can be organized into a visual database. The platform also simplifies client reporting with Dashboards. Users can create highly visual Dashboards that bring all of their reporting in one place and add customizable widgets for invoices, payment reminders, special requests, and more.

          </p>


        </div>
        {/* END DESCRIPTION */}
        <div className="news_share">

          {/* END SOCIAL SHARE */}
        </div>
      </div>
    </div>
  );
};

export default ModalThree;

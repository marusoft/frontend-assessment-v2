import React, { Fragment } from "react";
import "../pages/register.css"

const Header = () => {
  return (
    <Fragment>
      {/** header */}
      <div className="header">
        <span>
          <img
            src="https://res.cloudinary.com/marusofteamwork/image/upload/v1625065903/frontendassessment/Logo_csjnl6.svg"
            alt=""
          />
        </span>
        <span className="brand-name">DMS</span>
      </div>
      {/** header */}
    </Fragment>
  );
};

export default Header;

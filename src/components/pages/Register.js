import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import Header from "../layout/Header";
import "./register.css";

const Register = () => {
  return (
    <Fragment>
      <Header />

      {/** description and form */}
      <section className="description-form">
        <div className="description">
          <span>
            <img
              src="https://res.cloudinary.com/marusofteamwork/image/upload/v1625830668/frontendassessment/Delivery_Service_With_Man_On_Scooter_1_pwcafx.png"
              alt=""
            />{" "}
          </span>
          <h3 className="manage">
            Let's help you manage your riders and delivery systems.
          </h3>
          <p className="logistics">
            Every logistics span-input whether it's multi-national branding
            corporation or a regular local deserves the basic standard
            necessities in achieving a high service delivery.
          </p>
          <Link to="/register">
            <button className="button">Get Started</button>
          </Link>
        </div>

        <div className="form-wrapper">
          {/** static progress bar */}
          <progress className="progress" value="60" max="100">
            60%
          </progress>
          <h4>Basic Information</h4>
          <p>Enter the following information below</p>
          <div className="form">
            <form className="form-field">
              <TextField
                id="outlined-basic"
                label="Company Name"
                variant="outlined"
                size="small"
                InputProps={{
                  style: { borderRadius: "10px" },
                }}
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                className="lastname"
                size="small"
                InputProps={{
                  style: { borderRadius: "10px" },
                }}
              />
              <TextField
                id="outlined-basic"
                label="Company Address"
                variant="outlined"
                className="span-input"
                size="small"
                InputProps={{
                  style: { borderRadius: "10px" },
                }}
              />
              <TextField
                id="outlined-number"
                label="Phone Number"
                variant="outlined"
                className="span-input"
                size="small"
                InputProps={{
                  style: { borderRadius: "10px" },
                }}
              />
              <TextField
                id="outlined-basic"
                label="Company Email Address"
                variant="outlined"
                className="span-input"
                size="small"
                InputProps={{
                  style: { borderRadius: "10px" },
                }}
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                className="span-input"
                size="small"
                InputProps={{
                  style: { borderRadius: "10px" },
                }}
              />
            </form>
          </div>
          <div className="agree">
            <p>
              By clicking "Next" you agree to our{" "}
              <Link to="/policy">Terms of Service, Privacy Policy</Link>, and to
              receive marketing communications from Envoy.
            </p>
            <div className="account">
              <span>
                Got an account? <Link to="/login"> Sign in</Link>
              </span>
              <Link to="/login">
                <button className="button btn-register">Register</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/** description and form */}
    </Fragment>
  );
};

export default Register;

import { Fragment } from "react";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import "./login.css";

const Login = () => {
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

        <div className="login-wrapper">
          <h4>You’re Welcome Back!</h4>
          <p>Enter the following information below</p>
          <div className="login-form">
            <form className="login-field">
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
          <div className="f-password">
            <p>
              <Link to="/forgot Password">Forgot Password?</Link>
            </p>
            <div className="l-account">
              <span>
                Just joining us here? <Link to="/register"> Register Now</Link>
              </span>
              <Link to="/dashboard">
                <button className="button btn-login">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/** description and form */}
    </Fragment>
  );
};

export default Login;

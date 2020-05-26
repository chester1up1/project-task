import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import "./style.scss";
import { Link } from "react-router-dom";

export const StartPage = (props) => {
  return (
    <div className="start_page">
      <div className="logo">
        <p>T</p>
      </div>
      <div className="start_box">
        <div className="start_text">
          <p className="title">Welcome</p>
          <p className="text">
            Create an account and lets start too create a tasks
          </p>
        </div>
        <div className="start_btn">
          <Link to="/signup">
            <Button color="" className="btn">
              Create account
            </Button>
          </Link>
        </div>
        <div className="start_login_text">
          <p>
            Already have an account?{" "}
            <sapn className="span">
              <Link
                style={{ textDecoration: "none", color: "#36aaff" }}
                to="/signin"
              >
                Log In
              </Link>
            </sapn>
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);

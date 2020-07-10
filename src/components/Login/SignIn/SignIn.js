import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Input } from "reactstrap";
import "./style.scss";
import { Link } from "react-router-dom";
import { SignInFirebase } from "./actions";

export const SignIn = (props) => {
  const { SignInFirebase, login_error } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (login_error) {
      setError("all");
    }
  }, [login_error]);
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setError("");
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  const SignIn = () => {
    if (email !== "") {
      if (password !== "") {
        SignInFirebase(email, password);
      } else {
        setError("password");
      }
    } else {
      setError("email");
    }
  };
  return (
    <div className="signin_page">
      <div className="logo">
        <p>T</p>
      </div>
      <div className="signin_box">
        <div className="signin_text">
          <p className="title">Log In Now</p>
          <p className="text">please login to continue using our app</p>
        </div>
        <div className="input_div">
          <Input
            placeholder="email"
            type="email"
            value={email}
            onChange={onChangeEmail}
            invalid={error == "email" || error == "all" ? true : false}
          />
        </div>
        <div className="input_div">
          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={onChangePassword}
            invalid={error == "password" || error == "all" ? true : false}
          />
        </div>
        <div className="signin_btn">
          <Button color="" className="btn" onClick={SignIn}>
            Log in
          </Button>
        </div>
        <div className="signin_login_text">
          <p>
            Dont have an account?{" "}
            <sapn className="span">
              {" "}
              <Link
                style={{ textDecoration: "none", color: "#ffb638" }}
                to="/signup"
              >
                Sign up
              </Link>
            </sapn>
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  login_error: state.user.error,
});

const mapDispatchToProps = {
  SignInFirebase,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

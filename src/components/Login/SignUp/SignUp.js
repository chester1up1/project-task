import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Input } from "reactstrap";
import "./style.scss";
import { Link } from "react-router-dom";
import { SingUpFirebase } from "./actions";

export const SignUp = (props) => {
  const { SingUpFirebase } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setError("");
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setError("");
  };
  const onChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
    setError("");
  };

  const SignUp = () => {
    if (email !== "") {
      if (password.length >= 6 && password === passwordConfirm) {
        SingUpFirebase(email, password);
      } else {
        setError("pasword");
      }
    } else {
      setError("email");
    }
  };
  return (
    <div className="signup_page">
      <div className="logo">
        <p>T</p>
      </div>
      <div className="signup_box">
        <div className="signup_text">
          <p className="title">Sign Up Now</p>
          <p className="text">please fill the details and create account</p>
        </div>
        <div className="input_div">
          <Input
            placeholder="email"
            onChange={onChangeEmail}
            value={email}
            type="email"
            invalid={error == "email" ? true : false}
          />
        </div>
        <div className="input_div">
          <Input
            placeholder="password"
            onChange={onChangePassword}
            value={password}
            type="password"
            invalid={error == "pasword" ? true : false}
          />
        </div>
        <div className="input_div">
          <Input
            placeholder="confirm password"
            onChange={onChangePasswordConfirm}
            value={passwordConfirm}
            type="password"
            invalid={error == "pasword" ? true : false}
          />
        </div>
        <div className="signup_btn">
          <Button color="" className="btn" onClick={SignUp}>
            Create account
          </Button>
        </div>
        <div className="signup_login_text">
          <p>
            Already have an account?{" "}
            <sapn className="span">
              {" "}
              <Link
                style={{ textDecoration: "none", color: "#ca72fe" }}
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

const mapDispatchToProps = { SingUpFirebase };

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

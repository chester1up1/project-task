import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.scss";
import tasks_solid from "../../../img/tasks_solid.svg";
import plus_square_solid from "../../../img/plus_square_solid.svg";
import paperclip_solid from "../../../img/paperclip_solid.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar_">
      <div className="icon">
        <Link to="/projects">
          <img src={tasks_solid} alt="" />
        </Link>
        <Link to="/create-project">
          <img src={plus_square_solid} alt="" />
        </Link>
        <Link to="/connect">
          <img src={paperclip_solid} alt="" />
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

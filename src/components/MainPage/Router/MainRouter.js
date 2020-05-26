import React, { Component } from "react";
import { connect } from "react-redux";
import CreateProject from "../CreateProject/CreateProject";
import Projects from "../Projects/Projects";
import ConnectToProject from "../ConnectToProject/ConnectToProject";
import { Switch, Route } from "react-router";
import Navbar from "../Navbar/Navbar";
import OpenProject from "../OpenProject/OpenProject";

export const MainRouter = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/create-project" component={CreateProject} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/projects/:name/:key" component={OpenProject} />
        <Route path="/connect" component={ConnectToProject} />
        <Route path="/" component={Projects} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainRouter);

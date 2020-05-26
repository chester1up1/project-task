import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { GetAllProjects } from "./actions";
import Project from "./conteiners/Project";
import "./style.scss";
import moment from "moment";
import { Link } from "react-router-dom";
export const Projects = (props) => {
  const { GetAllProjects, me, projects } = props;
  useEffect(() => {
    GetAllProjects(me);
  }, []);

  return (
    <div className="projects">
      {projects
        ? projects.map((item, index) => (
            <Link
              to={`/projects/${item.admin}/${item.default_key}`}
              style={{ textDecoration: "none" }}
            >
              <Project
                key={index}
                name={item.name}
                admin={item.admin}
                users_count={item.users_count}
                color={item.color}
                deadline={new Date(item.deadline)}
                date_create={new Date(item.date_create)}
              />
            </Link>
          ))
        : []}
    </div>
  );
};

const mapStateToProps = (state) => ({
  me: state.user.email,
  projects: state.projects.items,
});

const mapDispatchToProps = {
  GetAllProjects,
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);

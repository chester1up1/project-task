import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { GetAllProjects } from "./actions";
import Project from "./conteiners/Project";
import "./style.scss";
import { Link } from "react-router-dom";
import Guide from "./Guide";
import { Spinner } from "reactstrap";
export const Projects = (props) => {
  const { GetAllProjects, me, projects, load } = props;
  useEffect(() => {
    GetAllProjects(me);
  }, []);

  return (
    <div className="projects">
      {load ? (
        projects && projects.length > 0 ? (
          projects.map((item, index) => (
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
        ) : (
          <Guide />
        )
      ) : (
        <div
          style={{
            width: "100%",
            height: "90%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spinner style={{ width: 100, height: 100 }} color="info" />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  me: state.user.email,
  projects: state.projects.items,
  load: state.projects.load,
});

const mapDispatchToProps = {
  GetAllProjects,
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);

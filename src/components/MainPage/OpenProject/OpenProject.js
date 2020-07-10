import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import { GetAllProjects } from "../Projects/actions";
import { Spinner } from "reactstrap";
import Not_found from "./not_found";
import Project from "./Project";

export const OpenProject = (props) => {
  const { projects, GetAllProjects, load } = props;
  const [load_, setload] = useState(false);
  console.log(props.match.params);
  console.log(projects, load);
  useEffect(() => {
    if (projects.length == 0) {
      GetAllProjects(props.match.params.name);
    }
    setTimeout(() => {
      setload(true);
    }, 2000);
    console.log("projects");
  }, []);
  const even = (item) =>
    item.key == `${props.match.params.name}#${props.match.params.key}`;
  return (
    <div>
      {!load ? (
        <div
          style={{
            width: "100vw",
            height: "83vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner
            type="grow"
            color="info"
            style={{ width: 250, height: 250 }}
          />
        </div>
      ) : projects.length !== 0 ? (
        projects.some(even) ? (
          projects.map((item) =>
            item.key ==
            `${props.match.params.name}#${props.match.params.key}` ? (
              <Project
                name={item.name}
                admin={item.admin}
                key_={item.key}
                count_users={item.count_users}
                color={item.color}
                deadline={item.deadline}
                date_create={item.date_create}
                users={item.users}
                tasks={item.tasks}
              />
            ) : (
              []
            )
          )
        ) : (
          <Not_found />
        )
      ) : (
        <Not_found />
      )}
    </div>
  );
};
// //(
//         {/* projects.some(even) ? (
//           <Project
//             name={item.name}
//             admin={item.admin}
//             key={item.key}
//             count_users={item.count_users}
//             color={item.color}
//             deadline={item.deadline}
//             date_create={item.date_create}
//           />
//         ) : (
//           <Not_found />
//         ) */}
//         )
const mapStateToProps = (state) => ({
  projects: state.projects.items,
  load: state.projects.load,
});

const mapDispatchToProps = { GetAllProjects };

export default connect(mapStateToProps, mapDispatchToProps)(OpenProject);

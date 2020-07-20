import React, { Component } from "react";
import { connect } from "react-redux";
import Pending from "./components/Pending";
import InProcess from "./components/InProcess";
import Completed from "./components/Completed";

export const Task = (props) => {
  const { name, status, user, color, id_, tasks, admin, author } = props;
  return (
    <div>
      {status == "pending" ? (
        <Pending
          name={name}
          color={color}
          id_={id_}
          tasks={tasks}
          admin={admin}
          author={author}
        />
      ) : status == "in_process" ? (
        <InProcess
          name={name}
          color={color}
          id_={id_}
          user={user}
          admin={admin}
          author={author}
          tasks={tasks}
        />
      ) : (
        <Completed
          name={name}
          color={color}
          id_={id_}
          user={user}
          admin={admin}
          author={author}
          tasks={tasks}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Task);

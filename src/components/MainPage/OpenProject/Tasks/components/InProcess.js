import React, { Component } from "react";
import { connect } from "react-redux";
import { DeletTask, FailedTask, ComplitedTask } from "../../actions";
import trash_alt_solid from "../../../../../img/trash_alt_solid.svg";
import "./style_inProcess.scss";

export const InProcess = (props) => {
  const {
    name,
    color,
    user,
    me,
    author,
    admin,
    DeletTask,
    id_,
    tasks,
    FailedTask,
    ComplitedTask,
  } = props;
  const Delete = () => {
    DeletTask(id_, tasks, name);
  };
  const Failed = () => {
    FailedTask(id_, tasks, name);
  };
  const Complited = () => {
    ComplitedTask(id_, tasks, name);
  };
  return (
    <div className="task_in_process" style={{ backgroundColor: color }}>
      <div className="left">
        <p style={{ fontSize: 14 }}>InProcess</p>
      </div>
      {user == me ? (
        <div className="center_admin">
          <p>{name}</p>
        </div>
      ) : (
        <div className="center">
          <p className="name">{name}</p>
          <p className="responsible">responsible : {" " + user}</p>
        </div>
      )}
      {user == me ? (
        <div className="right_admin">
          <div className="completed" onClick={Complited}>
            <p>completed</p>
          </div>
          <div className="failed" onClick={Failed}>
            <p>failed</p>
          </div>
          {author == me || admin == me || user == me ? (
            <div className="trash" onClick={Delete}>
              <img src={trash_alt_solid} alt="trash" />
            </div>
          ) : (
            []
          )}
        </div>
      ) : author == me || admin == me || user == me ? (
        <div className="right">
          <div className="trash" onClick={Delete}>
            <img src={trash_alt_solid} alt="trash" />
          </div>
        </div>
      ) : (
        []
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  me: state.user.email,
});

const mapDispatchToProps = { DeletTask, FailedTask, ComplitedTask };

export default connect(mapStateToProps, mapDispatchToProps)(InProcess);

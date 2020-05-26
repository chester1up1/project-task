import React, { Component } from "react";
import { connect } from "react-redux";
import "./style_completed.scss";
import { TakeTask, DeletTask } from "../../actions";
import trash_alt_solid from "../../../../../img/trash_alt_solid.svg";
import check_solid from "../../../../../img/check_solid.svg";

export const Completed = (props) => {
  const {
    name,
    color,
    id_,
    tasks,
    TakeTask,
    user,
    DeletTask,
    author,
    admin,
  } = props;
  const Take = () => {
    TakeTask(id_, tasks, name, user);
  };
  const Delete = () => {
    DeletTask(id_, tasks, name);
  };
  return (
    <div className="task_complited" style={{ backgroundColor: color }}>
      <div className="left">
        <p style={{ fontSize: 14 }}>complited</p>
      </div>
      <div className="center">
        <p>{name}</p>
      </div>
      <div className="right">
        <div className="take">
          <img src={check_solid} alt="" />
        </div>
        {author == user || admin == user ? (
          <div className="trash" onClick={Delete}>
            <img src={trash_alt_solid} alt="trash" />
          </div>
        ) : (
          []
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.email,
});

const mapDispatchToProps = { TakeTask, DeletTask };

export default connect(mapStateToProps, mapDispatchToProps)(Completed);

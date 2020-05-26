import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import arrow_left_solid from "../../../img/arrow_left_solid.svg";
import { Link } from "react-router-dom";
import "./style.scss";
import users_solid from "../../../img/users_solid.svg";
import trash_alt_solid from "../../../img/trash_alt_solid.svg";
import times_solid from "../../../img/times_solid.svg";
import { DeleteProjects, AddTask } from "./actions";
import { Button, Modal, ModalBody, Input } from "reactstrap";
import Task from "./Tasks/Task";

export const Project = (props) => {
  const {
    name,
    admin,
    key_,
    users,
    count_users,
    color,
    deadline,
    date_create,
    DeleteProjects,
    AddTask,
    tasks,
    me,
  } = props;
  const [modal, setModal] = useState(false);
  const [panel, setPanle] = useState(false);
  const [add, setAdd] = useState(false);
  const [nameTask, setNameTask] = useState("");
  const [error, setError] = useState(false);
  const toggle = () => setModal(!modal);
  const toggle2 = () => setPanle(!panel);
  const toggle3 = () => setAdd(true);
  const toggle3False = () => setAdd(false);
  let date1 = new Date(deadline);
  let date2 = new Date(date_create);
  let days_left = Math.ceil(
    (date1.getTime() - date2.getTime()) / (1000 * 3600 * 24)
  );
  const Coppy = () => {
    navigator.clipboard.writeText(key_).then(() => {});
  };
  const CreateNewTask = () => {
    if (add) {
      if (nameTask !== "") {
        AddTask(key_, nameTask, me);
        toggle3False();
        setNameTask("");
      } else {
        setError(true);
      }
    }
  };
  const changeName = (e) => {
    setNameTask(e.target.value);
    setError(false);
  };
  return (
    <div
      className="open_project"
      style={{ backgroundColor: color }}
      // onClick={toggle3False}
    >
      <div className="back">
        <Link to="/projects">
          <img src={arrow_left_solid} alt="back" />
        </Link>
        <p>
          days left<span className="span">{" " + days_left}</span>
        </p>
      </div>
      <div className="body">
        <div className="header">
          <div className="left">
            <p className="name" style={{ color: color }}>
              {name}
            </p>
            <p className="text">
              admin:
              <span className="span" style={{ color: color }}>
                {" " + admin}
              </span>
            </p>
            <p className="text " onClick={() => Coppy()}>
              key:
              <sapn className="span key" style={{ color: color }}>
                {" " + key_}
              </sapn>
            </p>
          </div>
          <div className="right">
            <div
              className="delete"
              style={{ backgroundColor: color }}
              onClick={toggle}
            >
              <img src={trash_alt_solid} alt="trash" />
            </div>

            <div
              className="users"
              style={{ backgroundColor: color }}
              onClick={() => toggle2()}
            >
              <img src={users_solid} alt="users" />
            </div>
          </div>
        </div>
        <div className="tasks">
          {tasks.map((item) => (
            <Task
              status={item.status}
              name={item.name}
              user={item.user}
              color={color}
              id_={key_}
              tasks={tasks}
              admin={admin}
              author={item.author}
            />
          ))}{" "}
        </div>
        <div className="add_task">
          <div className="add_btn_box">
            <div
              className="add_btn"
              onClick={() => {
                toggle3();
                CreateNewTask();
              }}
            >
              <p>+</p>
            </div>
          </div>
          <div className="add_input" style={{ width: add ? "80%" : "0px" }}>
            <Input
              placeholder="task name"
              style={{ display: add ? "flex" : "none" }}
              onChange={changeName}
              value={nameTask}
              invalid={error}
              maxLength={55}
            />
            <div className="close" onClick={toggle3False}>
              <img
                src={times_solid}
                alt="x"
                style={{ width: add ? "20px" : "0px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle} className="modal_delete">
        <ModalBody>
          <p style={{ fontSize: "larger", fontWeight: "bold" }}>
            You try delete projet
          </p>
          <Link to="/projects">
            <Button
              color="primary"
              onClick={() => {
                DeleteProjects(key_);
                toggle();
              }}
            >
              Yes
            </Button>{" "}
          </Link>

          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalBody>
      </Modal>
      <div
        id="mySidepanel"
        class="sidepanel"
        style={{ width: !panel ? "0px" : "250px" }}
      >
        <p>
          <span style={{ color: color }}>admin:</span>
          {" " + admin}
        </p>
        {users.length !== 0 ? users.map((item) => <p>{item}</p>) : []}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  me: state.user.email,
});

const mapDispatchToProps = { DeleteProjects, AddTask };

export default connect(mapStateToProps, mapDispatchToProps)(Project);

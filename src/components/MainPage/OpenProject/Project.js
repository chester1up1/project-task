import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import arrow_left_solid from "../../../img/arrow_left_solid.svg";
import { Link } from "react-router-dom";
import "./style.scss";
import users_solid from "../../../img/users_solid.svg";
import trash_alt_solid from "../../../img/trash_alt_solid.svg";
import times_solid from "../../../img/times_solid.svg";
import exit from "../../../img/exit.svg";
import { DeleteProjects, AddTask, ExitProject } from "./actions";
import { Button, Modal, ModalBody, Input } from "reactstrap";
import Task from "./Tasks/Task";
import { Tooltip } from "reactstrap";
export const Project = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle4 = () => setTooltipOpen(!tooltipOpen);
  useEffect(() => {}, []);
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
    ExitProject,
  } = props;
  const [modal, setModal] = useState(false);
  const [modal_exit, setModal_exit] = useState(false);
  const [panel, setPanle] = useState(false);
  const [add, setAdd] = useState(false);
  const [add2, setAdd2] = useState(false);
  const [nameTask, setNameTask] = useState("");
  const [error, setError] = useState(false);
  const toggle = () => setModal(!modal);
  const toggle_exit = () => setModal_exit(!modal_exit);
  const toggle2 = () => setPanle(!panel);
  const toggle3 = () => {
    setAdd(true);
    setAdd2(true);
  };
  const toggle3False = () => setAdd(false);
  let date1 = new Date(deadline);
  let date2 = new Date(date_create);
  let days_left = Math.ceil(
    (date1.getTime() - date2.getTime()) / (1000 * 3600 * 24)
  );
  const changeAdd = () => {
    setTimeout(() => {
      setAdd2(false);
    }, 500);
  };
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
    <div className="open_project" style={{ backgroundColor: color }}>
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
              <sapn
                className="span key"
                style={{ color: color }}
                id="TooltipExample"
                onClick={toggle4}
              >
                {" " + key_}
              </sapn>
            </p>
            <Tooltip
              placement="top"
              isOpen={tooltipOpen}
              target="TooltipExample"
              toggle={toggle4}
            >
              {" "}
              click to copy
            </Tooltip>
          </div>
          <div className="right">
            {admin == me ? (
              <div
                className="delete"
                style={{ backgroundColor: color }}
                onClick={toggle}
              >
                <img src={trash_alt_solid} alt="trash" />
              </div>
            ) : (
              <div
                className="delete"
                style={{ backgroundColor: color }}
                onClick={toggle_exit}
              >
                <img src={exit} alt="exit" />
              </div>
            )}

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
          <div className="pad" />
        </div>
        <div className="add_task">
          <div className="add_btn_box">
            <div
              className="add_btn_"
              onClick={() => {
                toggle3();
                CreateNewTask();
              }}
            >
              <p>+</p>
            </div>
          </div>
          <div
            className="add_input"
            style={{ width: add ? "95%" : "0px", opacity: add ? 1 : 0 }}
          >
            <Input
              placeholder="task name"
              style={{ display: add2 ? "flex" : "none" }}
              onChange={changeName}
              value={nameTask}
              invalid={error}
              maxLength={55}
            />
            <div
              className="close"
              onClick={() => {
                toggle3False();
                changeAdd();
              }}
            >
              <img
                src={times_solid}
                alt="x"
                style={{ width: add ? "20px" : "0px", opacity: add ? 1 : 0 }}
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
      <Modal isOpen={modal_exit} toggle={toggle_exit} className="modal_delete">
        <ModalBody>
          <p style={{ fontSize: "larger", fontWeight: "bold" }}>
            You try to leave the projet
          </p>
          <Link to="/projects">
            <Button
              color="primary"
              onClick={() => {
                ExitProject(key_, users, me);
                toggle_exit();
              }}
            >
              Yes
            </Button>{" "}
          </Link>

          <Button color="secondary" onClick={toggle_exit}>
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

const mapDispatchToProps = { DeleteProjects, AddTask, ExitProject };

export default connect(mapStateToProps, mapDispatchToProps)(Project);

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Input } from "reactstrap";
import "./style.scss";
import sign_out_alt_solid from "../../../img/sign_out_alt_solid.svg";
import { SignOutFirebase } from "../../../firebase/actions";
import { CreateProjectFirebase } from "./actions";
import { rndKey } from "./rnd";
import { Link } from "react-router-dom";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import history from "../../../lib/history";
export const CreateProject = (props) => {
  const { SignOutFirebase, CreateProjectFirebase, admin } = props;
  const [color, setColor] = useState("#A27BFD");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [key, setKey] = useState("");
  const [path, setPath] = useState("");
  const [date, setDate] = useState(new Date());
  const [date_create, setDateCreate] = useState("");
  const [allColors, setAllColors] = useState([
    "#76E3BF",
    "#A27BFD",
    "#E76186",
    "#EEA853",
    "#7EABF5",
  ]);
  useEffect(() => {
    if (name !== "") {
      setPath("/projects");
    } else {
      setPath("/create-project");
    }
  }, [name]);
  useEffect(() => {
    let key = rndKey;
    setKey(key);
    setDateCreate(moment().format("L"));
  }, []);
  const changeColor = (val) => {
    setColor(val);
  };
  const changeName = (e) => {
    setName(e.target.value);
    setError(false);
  };
  const changeDate = (date) => {
    let day = new Date(date);
    setDate(day);
  };
  const CreateProject = () => {
    if (name !== "") {
      let data = {
        name: name,
        color: color,
        users_count: 1,
        admin: admin,
        key: `${admin}#${key}`,
        default_key: key,
        users: [],
        deadline: moment(date).format("L"),
        date_create: date_create,
        tasks: [],
      };
      CreateProjectFirebase(data);
      setName("");
    } else {
      setError(true);
    }
  };
  return (
    <div className="create_project" style={{ backgroundColor: color }}>
      <div className="box">
        <div className="color">
          {allColors.map((item) => (
            <div
              onClick={() => changeColor(item)}
              style={{
                width: 20,
                height: 20,
                backgroundColor: item,
                margin: 5,
                borderRadius: 90,
              }}
            ></div>
          ))}
        </div>
        <div className="name">
          <p style={{ color: color }}> Enter project name:</p>
          <Input
            placeholder="Aa..."
            type="text"
            style={{ borderColor: color, color: color, fontWeight: "bold" }}
            onChange={changeName}
            value={name}
            invalid={error}
            maxLength={24}
          />
        </div>
        <div className="bot">
          <div className="date">
            <p style={{ color: color, marginLeft: 7 }}>Deadline:</p>
            <div style={{ marginLeft: 7 }}>
              <DatePicker selected={date} onChange={changeDate} />
            </div>
          </div>
          <div className="create">
            <Link to={path}>
              <Button
                color=""
                style={{ backgroundColor: color }}
                className="btn"
                onClick={CreateProject}
              >
                Create
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="logout">
        <img src={sign_out_alt_solid} alt="" onClick={SignOutFirebase} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  admin: state.user.email,
});

const mapDispatchToProps = {
  SignOutFirebase,
  CreateProjectFirebase,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);

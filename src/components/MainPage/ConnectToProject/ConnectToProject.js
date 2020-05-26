import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Input, Button } from "reactstrap";
import "./style.scss";
import { Connect } from "./actions";
import { Link } from "react-router-dom";
export const ConnectToProject = (props) => {
  const { Connect, me, path } = props;
  const [url, seturl] = useState("/projects");
  const [key_, setkey_] = useState("");
  const changeKey = (e) => {
    setkey_(e.target.value);
    seturl(`/projects/${e.target.value.replace("#", "/")}`);
  };
  const ConnectTo = () => {
    Connect(key_, me);
  };
  return (
    <div className="connect_to_project">
      <p>Enter a code</p>
      <div className="input_">
        <Input
          placeholder="email@example.com#MNAU"
          value={key_}
          onChange={changeKey}
        />
      </div>
      <Link to={url}>
        <Button
          color=""
          style={{
            backgroundColor: "#363636",
            color: "white",
            fontSize: "larger",
            fontWeight: "bold",
            marginTop: 10,
          }}
          onClick={ConnectTo}
        >
          Connect
        </Button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  me: state.user.email,
  path: state.projects.path,
});

const mapDispatchToProps = { Connect };

export default connect(mapStateToProps, mapDispatchToProps)(ConnectToProject);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./style.scss";
export const Project = (props) => {
  const { name, admin, users_count, color, deadline, date_create } = props;
  let days = Math.ceil(
    (deadline.getTime() - date_create.getTime()) / (1000 * 3600 * 24)
  );
  useEffect(() => {}, []);
  return (
    <div
      className="project"
      style={{
        backgroundColor: color,
      }}
    >
      <div className="left">
        <div className="top">
          <p>{name}</p>
        </div>
        <div className="bot">
          <div className="admin">
            <p>{admin}</p>
          </div>
          <div className="users">
            <p>users:{" " + users_count}</p>
          </div>
        </div>
      </div>
      <div className="right">
        <div
          className="days"
          style={{
            backgroundColor:
              days <= 1 ? "#e30b57" : days <= 3 ? "#f5dc3b" : "white",
          }}
        >
          <p style={{ color: days > 3 ? color : "white" }}>
            {days >= 0 ? days : 0}
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Project);

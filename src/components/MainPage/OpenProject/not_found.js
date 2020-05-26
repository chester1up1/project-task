import React from "react";
import sad_tear_regular from "../../../img/sad_tear_regular.svg";
import { Link } from "react-router-dom";
export default function Not_found() {
  return (
    <div
      style={{
        width: "100vw",
        height: "87vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={sad_tear_regular} alt="sad" style={{ marginRight: "10%" }} />
        <p
          style={{
            color: "#9F2EED",
            marginBottom: 0,
            fontWeight: "bold",
            fontSize: "x-large",
          }}
        >
          So sad, but this project does not exist,{" "}
          <Link to="/projects">go back</Link>
        </p>
      </div>
    </div>
  );
}

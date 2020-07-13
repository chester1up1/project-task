import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import DefaultRouter from "./components/Routers/DefaultRouter";
import mob_frame from "./img/mob_frame.png";
import mobile from "./img/mobile.svg";
import desktop from "./img/desktop.svg";

import "./style.scss";
function App() {
  const [version, setversion] = useState("mobile");
  const changeVersion = (version) => {
    setversion(version);
  };
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="main_all">
          <div
            className="_bg"
            style={{ display: version == "mobile" ? "" : "none" }}
          >
            <img src={mob_frame} alt="" />
          </div>
          <div className={`version_${version}`}>
            <div
              className="v_item"
              style={{
                backgroundColor: version == "mobile" ? "springgreen" : "",
              }}
            >
              <img
                onClick={() => changeVersion("mobile")}
                src={mobile}
                alt="mobile"
                style={{ transition: "0.2s" }}
              />
            </div>
            <div
              className="v_item"
              style={{
                backgroundColor: version == "desktop" ? "springgreen" : "",
              }}
            >
              <img
                onClick={() => changeVersion("desktop")}
                src={desktop}
                alt="desktop"
              />
            </div>
          </div>
          <div className={version} style={{ zIndex: 101 }}>
            <DefaultRouter />
          </div>
        </div>

        <div className="color_bg">
          {/* <img src={mobile_frame} alt="" /> */}
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

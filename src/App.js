import React, { useState, useEffect } from "react";
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
  const [version_disp, setDisp] = useState("");
  const [widthWindow, setWidthWindow] = useState(0);

  useEffect(() => {
    const displayWindowSize = (e) => {
      setWidthWindow(document.documentElement.clientWidth);
    };
    window.addEventListener("resize", displayWindowSize);
    if (widthWindow < 1280) {
      setDisp("none");
      setversion("desktop");
    } else {
      setDisp("");
    }
    return () => window.removeEventListener("resize", displayWindowSize);
  }, [widthWindow]);

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
          <div
            className={`version_${version}`}
            style={{ display: version_disp }}
          >
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
        <div className="color_bg" />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

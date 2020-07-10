import React from "react";
import plus_square_solid from "../../../img/plus_square_solid.svg";
import paperclip_solid from "../../../img/paperclip_solid.svg";
import "./style.scss";

export default function Guide() {
  return (
    <div className="guide">
      <div className=" guide_item ">
        <div>
          <p>To create a project, click on the icon</p>
        </div>
        <div className="guide_img border_l">
          <div>
            <img src={plus_square_solid} alt="plus_square_solid" />
          </div>
        </div>
      </div>
      <div className=" guide_item">
        <div>
          <p>To join the project click on the icon</p>
        </div>
        <div className="guide_img border_l">
          <div>
            <img src={paperclip_solid} alt="paperclip_solid" />
          </div>
        </div>
      </div>
    </div>
  );
}

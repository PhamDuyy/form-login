import React from "react";
import "../../styles/box.css";

export const RememberMe = ({ classname, type }) => {
  return (
    <div className="div-box">
      <div className="div1">
        <input className={classname} type={type} />
        <label>Remember me</label>
      </div>
      <div className="div2">
        <a>Forget?</a>
      </div>
    </div>
  );
};

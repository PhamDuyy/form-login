import React from "react";
import "../../styles/input.css";

export const Input = ({ classname, type, placehoder }) => {
  return (
    <input className={classname} type={type} placeholder={placehoder}></input>
  );
};

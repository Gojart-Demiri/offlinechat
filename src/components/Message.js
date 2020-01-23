// React Imports
import React from "react";
import { tsPropertySignature } from "@babel/types";

function Message(props) {
  return <div className="border border-success">
    <span><b>{props.nameOfUser}</b></span> {''}
    <span>{props.messageOfUser}</span>
  </div>;
}

export default Message;

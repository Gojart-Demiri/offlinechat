// React Imports
import React from "react";

import Message from "./Message";

function Messages(props) {
  return (
    <div>
    {props.arraOfMessage.map(m =>  <Message  nameOfUser={m.name} messageOfUser={m.msg}/>)}
     
    </div>
  );
}

export default Messages;
    
// React Imports
import React from "react";

// Styles
import "./App.css";

// Components
import Messages from "./components/Messages";
import Input from "./components/Input";
import { resetWarningCache } from "prop-types";

class App extends React.Component {
  state = {
    messages: []
  };

  messageToState = obj => {
    const messages = this.state.messages;

    messages.push(obj);

    this.setState({
      messages: this.state.messages
    });
  };
  
 

  render() {
    return (
      <div className="App container">
        <Messages arraOfMessage ={this.state.messages} />
        <Input parentMsgToState={this.messageToState} dummy="dummy" />
      </div>
    );
  }
}

export default App;

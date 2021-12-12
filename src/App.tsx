import { observer } from "mobx-react";
import React from "react";
import "./App.css";
import ListToDo from "./components/ListToDo/LisToDo";

@observer
class App extends React.Component {
  render() {
    return (
      <div>
        <ListToDo />
      </div>
    );
  }
}

export default App;

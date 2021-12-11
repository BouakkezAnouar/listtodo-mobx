import { observer, inject } from "mobx-react";
import { Component, ChangeEvent, KeyboardEvent } from "react";
import { ListToDoStore } from "../stores/ListToDoStore";

export interface IStore {
  store?: ListToDoStore;
}

@inject("store")
@observer
class ListToDo extends Component<IStore> {
  private updateTextInput = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.store!.setTextInput(event.target.value);
  };

  private addTodo = (): void => {
    this.props.store!.addToDo(this.props.store?.textInput!);
    this.props.store!.setTextInput("");
  };

  private handleOnKeyPress = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Enter") {
      this.addTodo();
    }
  };
  public render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.updateTextInput}
          onKeyPress={this.handleOnKeyPress}
          value={this.props.store?.textInput}
        />
        <button onClick={this.addTodo}>Add</button>
        <ul>
          {this.props.store?.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListToDo;

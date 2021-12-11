import { observable, action, autorun, makeObservable } from "mobx";

export class ListToDoStore {
  constructor() {
    makeObservable(this);
    autorun(() => console.log(this.todos[0]));
  }
  @observable todos: string[] = [];
  @observable textInput: string = "";
  @action addToDo = (value: string) => {
    this.todos.push(value);
  };
  @action setTextInput = (text: string) => {
    this.textInput = text;
  };
}

export default function createStore(): ListToDoStore {
  return new ListToDoStore();
}

import { observable, action, autorun, makeObservable } from "mobx";
import { ToDoModel } from "../components/ToDoListItem/TodoListItem";

export class ListToDoStore {
  constructor() {
    makeObservable(this);
  }
  @observable todos: ToDoModel[] = [];
  @observable textInput: string = "";
  @action addToDo = (value: string) => {
    this.todos.push({ id: Date.now(), value, isCompleted: false } as ToDoModel);
  };
  @action setTextInput = (text: string) => {
    this.textInput = text;
  };
  @action toggleToDo(todo: ToDoModel) {
    todo.isCompleted = !todo.isCompleted;
  }
  @action ClearCompletedTodos = () => {
    this.todos = this.todos.filter((todo) => !todo.isCompleted);
  };
}

export default function createStore(): ListToDoStore {
  return new ListToDoStore();
}

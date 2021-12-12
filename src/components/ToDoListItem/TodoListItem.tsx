import { inject, observer } from "mobx-react";
import { FC } from "react";
import { ListToDoStore } from "../../stores/ListToDoStore";

export interface ToDoModel {
  value: string;
  id: number;
  isCompleted: boolean;
}

export interface IToDoProps {
  todo: ToDoModel;
  store?: ListToDoStore;
}

const TodoListItem: FC<IToDoProps> = ({ todo, store }) => {
  const toggleTodo = () => {
    store?.toggleToDo(todo);
  };
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : undefined }}
    >
      <input type="checkbox" onChange={toggleTodo} checked={todo.isCompleted} />{" "}
      {todo.value}
    </div>
  );
};
export default inject("store")(observer(TodoListItem));

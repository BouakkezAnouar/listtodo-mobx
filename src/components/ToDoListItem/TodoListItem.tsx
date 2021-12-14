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

const TodoListItem: FC<IToDoProps> = inject("store")(
  observer((props) => {
    const toggleTodo = () => {
      props.store?.toggleToDo(props.todo);
    };
    return (
      <div
        style={{
          textDecoration: props.todo.isCompleted ? "line-through" : undefined,
        }}
      >
        <input
          type="checkbox"
          onChange={toggleTodo}
          checked={props.todo.isCompleted}
        />{" "}
        {props.todo.value}
      </div>
    );
  })
);

export default TodoListItem;

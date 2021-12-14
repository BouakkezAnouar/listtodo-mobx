import { observer, inject } from "mobx-react";
import { FC, ChangeEvent, KeyboardEvent } from "react";
import { ListToDoStore } from "../../stores/ListToDoStore";
import TodoListItem from "../ToDoListItem/TodoListItem";
export interface IStore {
  store?: ListToDoStore;
}

const ListToDo: FC<IStore> = ({ store }) => {
  const updateTextInput = (event: ChangeEvent<HTMLInputElement>) => {
    store!.setTextInput(event.target.value);
  };

  const addTodo = (): void => {
    store!.addToDo(store?.textInput!);
    store!.setTextInput("");
  };

  const handleOnKeyPress = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  const clearCompletedTodos = () => {
    store?.ClearCompletedTodos();
  };

  return (
    <div>
      <input
        type="text"
        onChange={updateTextInput}
        onKeyPress={handleOnKeyPress}
        value={store?.textInput}
      />
      <button onClick={clearCompletedTodos}>clear completed</button>
      <button onClick={addTodo}>Add</button>
      <ul>
        {store?.todos.map((todo, index) => (
          <TodoListItem todo={todo} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default inject("store")(observer(ListToDo));

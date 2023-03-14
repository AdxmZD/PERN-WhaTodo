import React from "react";
import { FaTrash, FaEdit, FaCheckCircle } from "react-icons/fa";

const TodoList = ({ todos, setTodos }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div>
      {todos.map((todo) => (
        <li
          className="flex rounded justify-between border border-blue p-3 w-[450px]"
          key={todo.id}
        >
          <input
            className="bg-transparent p-1"
            type="text"
            value={todo.name}
            onChange={(event) => event.preventDefault()}
          />
          <div className="flex justify-between gap-4">
            <button onClick={() => handleComplete(todo)}>
              <FaCheckCircle size={25} />
            </button>
            <button>
              <FaEdit size={25} />
            </button>
            <button onClick={() => handleDelete(todo)}>
              <FaTrash size={25} />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;

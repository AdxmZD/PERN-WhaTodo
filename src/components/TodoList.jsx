import React from "react";

const TodoList = ({ todo, setTodo }) => {
  return (
    <div>
      {todo.map((todo) => (
        <li key={todo.id}>
          <input
            className="bg-transparent"
            type="text"
            value={todo.name}
            onChange={(event) => event.preventDefault()}
          />
        </li>
      ))}
    </div>
  );
};

export default TodoList;

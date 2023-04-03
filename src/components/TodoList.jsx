import React from "react";
import { useEffect } from "react";
import { FaTrash, FaEdit, FaCheckCircle } from "react-icons/fa";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const Data = await response.json();
      setTodos(Data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleDelete = async ({ id }) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      console.log(deleteTodo);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleComplete = async ({ id, description, completed }) => {
    try {
      const body = {
        description: description,
        completed: !completed,
      };
      const completeTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(completeTodo);
      setTodos(
        todos.map((item) => {
          if (item.id === id) {
            return { ...item, completed: !item.completed };
          }
          return item;
        })
      );
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  return (
    <div className="w-full z-20">
      {todos.map((todo) => (
        <li
          className="flex border-b border-[#363B4B] justify-between bg-[#191E2C] p-3 w-full"
          key={todo.id}
        >
          <div className="flex justify-between gap-2">
            <button onClick={() => handleComplete(todo)}>
              <FaCheckCircle size={20} />
            </button>
            {todo.completed === true ? (
              <input
                className="bg-transparent p-1"
                type="text"
                style={{
                  textDecorationLine: "line-through",
                  textDecorationStyle: "solid",
                }}
                value={todo.description}
                onChange={(event) => event.preventDefault()}
              />
            ) : (
              <input
                className="bg-transparent p-1"
                type="text"
                value={todo.description}
                onChange={(event) => event.preventDefault()}
              />
            )}
          </div>
          <div className="flex justify-between gap-4">
            <button onClick={() => handleEdit(todo)}>
              <FaEdit size={20} />
            </button>
            <button onClick={() => handleDelete(todo)}>
              <FaTrash size={20} />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;

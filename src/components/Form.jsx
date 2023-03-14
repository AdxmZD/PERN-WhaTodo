import { useEffect, React } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const inputChange = (event) => {
    setInput(event.target.value);
  };
  const updateTodo = (name, id, completed) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { name, id, completed } : todo
    );
    setTodos(newTodos);
    setEditTodo(null);
  };
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.name);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), name: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form className="flex justify-between gap-7 w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        required
        value={input}
        className="rounded border border-blue w-5/6 text-black p-2"
        onChange={inputChange}
      />
      {editTodo ? (
        <button
          className=" rounded-2xl bg-blue w-1/6 p-2 font-semibold font-opensans"
          type="submit"
        >
          Update
        </button>
      ) : (
        <button
          className=" rounded-2xl bg-blue w-1/6  p-2 font-semibold font-opensans"
          type="submit"
        >
          Add
        </button>
      )}
    </form>
  );
};

export default Form;

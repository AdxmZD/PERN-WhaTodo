import { useEffect, React } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const inputChange = (event) => {
    setInput(event.target.value);
  };
  const updateTodo = async (description, id, completed) => {
    try {
      const body = { description, completed };
      const updateTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(updateTodo);
      const newTodos = todos.map((todo) =>
        todo.id === id ? { description, id, completed } : todo
      );
      setTodos(newTodos);
      setEditTodo(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.description);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  // console.log(todos);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!editTodo) {
      try {
        const todoid = uuidv4();
        const body = { id: todoid, description: input, completed: false };
        const addTodo = await fetch("http://localhost:5000/todos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        console.log(addTodo);
        setTodos([
          ...todos,
          { id: todoid, description: input, completed: false },
        ]);
        setInput("");
      } catch (error) {
        console.error(error.message);
      }
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form
      className="flex rounded-xl z-20 justify-between gap-7 w-full bg-[#191E2C] p-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter a Todo..."
        required
        value={input}
        className="rounded w-5/6 text-white p-2 bg-transparent"
        onChange={inputChange}
      />
      {editTodo ? (
        <button
          className=" rounded-xl bg-[#363B4B] w-1/6 p-2 font-semibold font-opensans"
          type="submit"
        >
          Update
        </button>
      ) : (
        <button
          className=" rounded-xl bg-[#363B4B] w-1/6  p-2 font-semibold font-opensans"
          type="submit"
        >
          Add
        </button>
      )}
    </form>
  );
};

export default Form;

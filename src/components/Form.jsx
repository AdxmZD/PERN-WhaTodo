import { React } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todo, setTodo }) => {
  const inputChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodo([...todo, { id: uuidv4(), name: input, completed: false }]);
    setInput("");
  };

  return (
    <form className="flex gap-7" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        required
        value={input}
        className="rounded border border-blue w-[400px] text-black p-2"
        onChange={inputChange}
      />
      <button
        className=" rounded-3xl bg-blue p-2 font-semibold font-opensans"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  );
};

export default Form;

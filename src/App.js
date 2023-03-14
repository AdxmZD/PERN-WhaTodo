import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  return (
    <div className="App">
      <div className="flex mx-auto justify-center py-7">
        <Header />
      </div>
      <div className="flex mx-auto justify-center py-7 w-1/3">
        <Form input={input} setInput={setInput} todo={todo} setTodo={setTodo} />
      </div>
      <div className="flex mx-auto justify-center py-7 w-1/3">
        <TodoList todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
}

export default App;

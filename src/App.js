import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from "react";
import gradientbg from "./assets/redblue-bg.png";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className="App">
      <div className="absolute w-full h-full object-contain z-0">
        <img className="w-full h-[600px]" alt="redblue-bg" src={gradientbg} />
      </div>
      <div className="flex mx-auto justify-center py-5 z-20 md:w-1/3 sm:w-1/2">
        <Header />
      </div>
      <div className="flex mx-auto z-20 justify-center py-2 md:w-1/3 sm:w-1/2">
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </div>
      <div className="flex z-20 mx-auto justify-center py-7 md:w-1/3 sm:w-1/2">
        <TodoList
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </div>
    </div>
  );
}

export default App;

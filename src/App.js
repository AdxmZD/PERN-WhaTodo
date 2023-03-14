import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className="App">
      <div className="flex mx-auto justify-center py-7">
        <Header />
      </div>
      <div className="flex mx-auto justify-center py-7 w-1/3">
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </div>
      <div className="flex mx-auto justify-center py-7 w-1/3">
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

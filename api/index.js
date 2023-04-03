import express from "express";
import cors from "cors";
const app = express();
import pool from "./db.js";

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create todo

app.post("/todos", async (req, res) => {
  try {
    const { id, description, completed } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (id, description, completed) VALUES($1,$2,$3) RETURNING *",
      [id, description, completed]
    );
    res.json(newTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//get all todos

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (error) {
    console.log(error.message);
  }
});

//get todo

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE id = $1", [id]);
    res.json(todo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//update todo

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description, completed } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1, completed = $2 WHERE id = $3",
      [description, completed, id]
    );
    res.json("Todo was updated successfully");
  } catch (error) {
    console.error(error.message);
  }
});

//delete todo

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE id = $1", [id]);
    res.json("Todo was deleted");
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});

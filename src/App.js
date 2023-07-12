import { useState } from "react";
import TodosList from "./components/todos-list";
import AddTodo from "./components/add-todo";
import "./App.css";
import CompletedTodos from "./components/completed-todos";
import Box from '@mui/material/Box';

import ReorderIcon from '@mui/icons-material/Reorder';

import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";

function App() {
  const [todos, setTodos] = useState(["Learn React", "Build Apps"]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (index) => {
    const filteredTodos = completedTodos.filter((todo, i) => index !== i);
    setCompletedTodos(filteredTodos);
  };

  const markTodoAsDone = (index) => {
    const todoToBeMarked = todos[index];
    const filteredTodos = todos.filter((todo, i) => index !== i);
    setCompletedTodos([...completedTodos, todoToBeMarked]);
    setTodos(filteredTodos);
  };

  return (
    <>
      <Box marginBottom={1}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar style={{ justifyContent: "center" }}>
            <ReorderIcon sx={{marginRight:"10px"}}/>
            <Typography variant="h4" align="center">
              Welcome To Todo App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Box marginBottom={1} className="App">
        <AddTodo addTodo={addTodo} />
        <CompletedTodos completedTodos={completedTodos} removeTodo={removeTodo} />
        <TodosList todos={todos} markTodoAsDone={markTodoAsDone} />
      </Box>
    </>
    
  );
}

export default App;

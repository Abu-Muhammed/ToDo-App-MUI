import React from "react";
import { useState } from "react";
import AddTodoStyles from "./add-todo.module.css";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from "@mui/material";

const AddTodo = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e) => setNewTodo(e.target.value);

  const handleClick = () => {
    if (!newTodo) return;
    addTodo(newTodo);
    setNewTodo("");
  };

  function checkEnter(event) {
    if (event.keyCode === 13 || event.which === 13) handleClick();
  }

  return (
  
    <Box display="flex" flexDirection="column" alignItems="center">
      <main>
        <Typography variant="h3" component="h2" sx={{marginTop:"10px" ,marginBottom:"17px" }}>
            List Your ToDos
        </Typography>
      </main>
      <Stack direction="row" spacing={1} alignItems="center" justifyContent="centre">
        <TextField
          label="Add new todo"
          variant="outlined"
          size="small"
          inputProps={{ style: { fontSize: 26 } }}
          onKeyDown={checkEnter}
          onChange={handleChange}
          value={newTodo}
          className={AddTodoStyles.todoInput}
        />
        <Button
          sx={{ padding: "12px" }}
          variant="contained"
          onClick={handleClick}
          className={AddTodoStyles.addTodoButton}
        >
          Add Todo
        </Button>
      </Stack>
    </Box>
            
   
    
  );
};

export default AddTodo;

import React from "react";
import TodosStyles from "./todos.module.css";

import Box from "@mui/material/Box/Box";
import { Typography } from "@mui/material";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const { todoWrapper, todoLabel } = TodosStyles;

const Todo = ({ todo, handleAction, index, actionIcon, isComplete }) => {
  return (
    <Box className={`${todoWrapper}`}>
      <Typography style={{ textDecoration: isComplete ? "line-through" : "none" }}
        className={todoLabel}>
        {todo}
      </Typography>
      {isComplete ? (
        <DeleteIcon
          alt="todo-action"
          onClick={() => handleAction(index)}
          sx={{
              cursor: "pointer",
              "&:hover": {
              color: "red",
              },
            }}
        />
          ) : (
        <CheckCircleIcon
          alt="todo-action"
          onClick={() => handleAction(index)}
          sx={{
              cursor: "pointer",
              "&:hover": {
              color: "green",
              },
            }}
        />
            )}
    </Box>
  );
};

export default Todo;

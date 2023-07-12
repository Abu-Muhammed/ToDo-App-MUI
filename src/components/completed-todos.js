import React from "react";
import Todo from "./todo";
import DeleteIcon from "./delete.svg";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CompletedTodos = ({ removeTodo, completedTodos }) => {
  
  return (
    <Box margin={5}>
      <Accordion>
        <AccordionSummary
          sx={{width:"350px"}}
          aria-controls="panel1a-content"
          id="panel1a-header"
          expandIcon={<ExpandMoreIcon />}
        >
        <Typography>Completed ToDos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Box>
            {completedTodos.map((todo, index) => {
              return (
                <Todo
                  isComplete
                  key={index}
                  index={index}
                  todo={todo}
                  handleAction={removeTodo}
                  actionIcon={DeleteIcon}
                />
              );
            })}
            </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CompletedTodos;

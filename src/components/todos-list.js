import React from "react";
import Todo from "./todo";
import TickIcon from "./tick.svg";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TodosList = ({ markTodoAsDone, todos }) => {
  return (
    <Box>
    <Accordion defaultExpanded>
        <AccordionSummary
          sx={{width:"350px"}}
          aria-controls="panel1a-content"
          id="panel1a-header"
          expandIcon={<ExpandMoreIcon />}
        >
        <Typography>ToDos List</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            <Box>
            {todos.map((todo, index) => {
              return (
              <Todo
              isComplete={false}
              key={index}
              index={index}
              todo={todo}
              actionIcon={TickIcon}
              handleAction={markTodoAsDone}
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

export default TodosList;

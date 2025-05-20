
import React, { useEffect, useState } from 'react';
import { Container, List, ListItem, ListItemText } from '@mui/material';
import { getTasks } from '../utils/api';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(data => setTasks(data));
  }, []);

  return (
    <Container>
      <List>
        {tasks.map(task => (
          <ListItem key={task.id}>
            <ListItemText primary={task.title} secondary={task.due_date} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

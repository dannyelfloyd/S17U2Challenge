import './App.css';

import React, { useState, useEffect } from 'react'
import Task from './components/Task';
import AddTaskForm from './components/AddTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text: text,
      completed: false
    }
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
      ? { ...task, completed: !task.completed }
      : task))
  }

  return (
    <>
      <AddTaskForm onAdd={addTask}/>
      <ul>
        {tasks.map(task => (
        <Task 
          task={task} 
          key={task.id}
          onDelete={deleteTask}
          onToggle={toggleTask}
        />
        ))}
     </ul>
    </>
  );
};

export default App;

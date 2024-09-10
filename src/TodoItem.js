import React from 'react';

/* const TodoItem = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={toggleTaskCompletion} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
}; */

const TodoItem = ({ task }) => {
  return (
    <span className={`task ${task.completed ? 'completed' : ''}`}>
      {task.text}
    </span>
  );
};

export default TodoItem;
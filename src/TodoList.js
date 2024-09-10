import React from 'react';
import TodoItem from './TodoItem';

/* const TodoList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <li key={index} className={`todo-item ${task.completed ? 'completed' : ''}`}>
          <TodoItem 
            task={task} 
            toggleTaskCompletion={() => toggleTaskCompletion(index)} 
            deleteTask={() => deleteTask(index)} 
          />
          <button 
            className="complete-btn" 
            onClick={() => toggleTaskCompletion(index)} 
            title="Click to mark as complete"
          >
            {task.completed ? 'Completed' : 'Mark Complete'}
          </button>
          <button 
            className="delete-btn" 
            onClick={() => deleteTask(index)} 
            title="Click to delete this task"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}; */

const TodoList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <table className="todo-table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td className={`task ${task.completed ? 'completed' : ''}`}>
              {task.text}
            </td>
            <td>
              {task.completed ? 'Completed' : 'Pending'}
            </td>
            <td>
              <button 
                className="complete-btn" 
                onClick={() => toggleTaskCompletion(index)} 
                title="Click to mark as complete"
              >
                {task.completed ? 'Completed' : 'Mark Complete'}
              </button>
              <button 
                className="delete-btn" 
                onClick={() => deleteTask(index)} 
                title="Click to delete this task"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;

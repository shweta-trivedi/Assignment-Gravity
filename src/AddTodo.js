import React, { useState } from 'react';

const AddTodo = ({ addTask }) => {
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input.trim()) {
      addTask(input);
      setInput(''); // Clear the input field after adding
    }
  };

  return (
    <div className="add-todo">
      <input 
        type="text" 
        placeholder="Add a task..." 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button class="complete-btn" onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTodo;

import { useState } from 'react';
import React from 'react';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  // Handle adding a new task
  const addTask = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInput('');
  };

  // Toggle completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>

      <form onSubmit={addTask} className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded p-2"
          placeholder="Enter a task"
        />
        <button className="bg-blue-500 text-white px-4 rounded">Add</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-2 border-b ${
              task.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            <span onClick={() => toggleComplete(task.id)} className="cursor-pointer">
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 font-bold"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

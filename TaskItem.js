// src/TaskItem.js
import React from 'react';

const TaskItem = ({ task, deleteTask, markAsComplete, startEditTask }) => {
    return (
        <div className={`task ${task.completed ? 'completed' : ''}`}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <button onClick={() => markAsComplete(task.id)}>Complete</button>
            <button onClick={() => startEditTask(task)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
};

export default TaskItem;

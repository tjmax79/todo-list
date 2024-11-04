// src/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, markAsComplete, startEditTask }) => {
    return (
        <div>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    markAsComplete={markAsComplete}
                    startEditTask={startEditTask}
                />
            ))}
        </div>
    );
};

export default TaskList;

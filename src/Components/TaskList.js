import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TaskList = ({ setEditTask }) => {
    const navigate = useNavigate();

    //state to manage Tasks
    const [tasks, setTasks] = useState([]);

    // fetch tasks from localStorage
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || null;
        setTasks(storedTasks);
    }, []);

    // function to handle task completion
    const handleCheckboxChange = (taskId) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };

    // function to handle task deletion
    const handleDeleteClick = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        updatedTasks.length === 0 ? setTasks(null) : setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };

    // function to save tasks on localStorage
    const saveTasksToLocalStorage = (taskData) => {
        taskData.length === 0
            ? localStorage.removeItem("tasks")
            : localStorage.setItem("tasks", JSON.stringify(taskData));
    };

    const handleEditTask = (task) => {
        navigate("/edit");
        setEditTask(task);
    };

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks !== null ? (
                    tasks.map((task) => (
                        <li
                            key={task.id}
                            style={{
                                textDecoration: task.completed
                                    ? "line-through"
                                    : "none",
                            }}>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleCheckboxChange(task.id)}
                            />
                            {task.name} - {task.priority}
                            <button onClick={() => handleDeleteClick(task.id)}>
                                Delete Task
                            </button>
                            <button
                                onClick={() => {
                                    handleEditTask(task);
                                }}>
                                Edit Task
                            </button>
                        </li>
                    ))
                ) : (
                    <p>Please enter a task using Add Task button.</p>
                )}
            </ul>
        </div>
    );
};

export default TaskList;

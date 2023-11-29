import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TaskList = ({ setEditTask, tasks, setTasks }) => {
    const navigate = useNavigate();

    // Fetch tasks from localStorage on component mount
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(storedTasks);
    }, []);

    // Function to handle task completion
    const handleCheckboxChange = (taskId) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };

    // Function to handle task deletion
    const handleDeleteClick = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks.length === 0 ? [] : updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    };

    // Function to save tasks to localStorage
    const saveTasksToLocalStorage = (taskData) => {
        taskData.length === 0
            ? localStorage.removeItem("tasks")
            : localStorage.setItem("tasks", JSON.stringify(taskData));
    };

    // Function to handle editing a task
    const handleEditTask = (task) => {
        setEditTask(task);
        navigate("/edit");
    };

    return (
        <div className="taskList">
            <h2>Task List</h2>
            <ul>
                {tasks.length !== 0 ? (
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
                            <p>{task.name}</p>
                            <p>-</p>
                            <p>{task.priority}</p>
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
                    <p>Please add a task using Add Task button.</p>
                )}
            </ul>
        </div>
    );
};

export default TaskList;

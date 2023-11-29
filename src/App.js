import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddTask from "./Components/AddTask";
import EditTask from "./Components/EditTask";
import Navbar from "./Components/Navbar";
import TaskList from "./Components/TaskList";
import "./styles.css";

const App = () => {
    // State to manage tasks
    const [tasks, setTasks] = useState([]);
    const [editTask, setEditTask] = useState(null);

    // function to handle adding a new task
    const handleAddTask = (newTask) => {
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    // function to handle updating an existing task
    const handleSaveTask = (editingTask) => {
        const updatedTasks = tasks.map((task) =>
            task.id === editingTask.id ? { ...editingTask } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(data);
    }, []);

    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={<TaskList setEditTask={setEditTask} />}
                />
                <Route
                    path="/add"
                    element={<AddTask onAddTask={handleAddTask} />}
                />
                <Route
                    path="/edit"
                    element={
                        <EditTask task={editTask} onSaveTask={handleSaveTask} />
                    }
                />
            </Routes>
        </div>
    );
};

export default App;

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

    // Function to handle adding a new task
    const handleAddTask = (newTask) => {
        // Update tasks state with the new task
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);

        // Update local storage with the updated tasks
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    // Function to handle updating an existing task
    const handleSaveTask = (editingTask) => {
        // Map through tasks and replace the edited task
        const updatedTasks = tasks.map((task) =>
            task.id === editingTask.id ? { ...editingTask } : task
        );

        // Update tasks state with the edited task
        setTasks(updatedTasks);

        // Update local storage with the updated tasks
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    // Load tasks from local storage on component mount
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(data);
    }, []);

    return (
        <div className="app">
            {/* Navigation Bar */}
            <Navbar />

            {/* Define routes for different components */}
            <Routes>
                {/* TaskList component for the home route */}
                <Route
                    path="/"
                    element={
                        <TaskList
                            setEditTask={setEditTask}
                            tasks={tasks}
                            setTasks={setTasks}
                        />
                    }
                />

                {/* AddTask component for the 'add' route */}
                <Route
                    path="/add"
                    element={<AddTask onAddTask={handleAddTask} />}
                />

                {/* EditTask component for the 'edit' route */}
                <Route
                    path="/edit"
                    element={
                        <EditTask
                            editTask={editTask}
                            onSaveTask={handleSaveTask}
                        />
                    }
                />
            </Routes>
        </div>
    );
};

export default App;

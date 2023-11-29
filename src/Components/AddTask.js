import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = ({ onAddTask }) => {
    const navigate = useNavigate();

    // State to manage form input
    const [task, setTask] = useState({
        name: "",
        description: "",
        priority: "low",
    });

    // Function to handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Update the task state with the new input value
        setTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a new task with unique ID and default completion status
        const newTask = { ...task, id: Date.now(), completed: false };

        // Call the onAddTask function passed from the parent component
        onAddTask(newTask);

        // Clear the form fields after submitting the task
        setTask({ name: "", description: "", priority: "low" });

        // Navigate back to the home page after adding the task
        navigate("/");
    };

    return (
        <div className="addTask">
            <h2>Add Task</h2>
            <form action="" onSubmit={handleSubmit}>
                {/* Task Name Input */}
                <label htmlFor="name">
                    Task Name:
                    <input
                        type="text"
                        name="name"
                        value={task.name}
                        onChange={handleInputChange}
                        required
                    />
                </label>

                <br />
                <br />

                {/* Task Description Textarea */}
                <label htmlFor="description">
                    Task Description:
                    <textarea
                        name="description"
                        value={task.description}
                        onChange={handleInputChange}></textarea>
                </label>

                <br />
                <br />

                {/* Task Priority Dropdown */}
                <label htmlFor="priority">
                    Task Priority:
                    <select
                        name="priority"
                        value={task.priority}
                        onChange={handleInputChange}>
                        <option value="low">Low Priority</option>
                        <option value="medium">Medium Priority</option>
                        <option value="high">High Priority</option>
                    </select>
                </label>

                <br />
                <br />

                {/* Submit Button */}
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default AddTask;

import React, { useState } from "react";

const AddTask = ({ onAddTask }) => {
    // state to manage form input
    const [task, setTask] = useState({
        name: "",
        description: "",
        priority: "low",
    });

    // function to handle input change
    const handleInputChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        // destructuring the name and value
        const { name, value } = e.target;
        setTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    // function to handle form submission
    const handleSubmit = (e) => {
        // skip the prevent behaviour of the form
        e.preventDefault();

        const newTask = { ...task, id: Date.now(), completed: false };
        onAddTask(newTask);
        setTask({ name: "", description: "", priority: "low" });
    };

    return (
        <div>
            <h2>Add Task</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">
                    Task Name:{" "}
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

                <label htmlFor="">
                    Task Description:{" "}
                    <textarea
                        name="description"
                        value={task.description}
                        onChange={handleInputChange}></textarea>
                </label>

                <br />
                <br />

                <label htmlFor="">
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
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default AddTask;

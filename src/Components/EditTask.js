import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditTask = ({ task, onSaveTask }) => {
    const navigate = useNavigate();

    const [editedTask, setEditedTask] = useState(task);

    // function to handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    // function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveTask(editedTask);
        navigate("/");
    };

    const onCancel = () => {
        const approve = prompt("are you sure about cancel the changes");
        if (approve) {
            navigate("/add");
        }
    };

    return (
        <div>
            <h2>Edit Task</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">
                    Task Name:{" "}
                    <input
                        type="text"
                        name="name"
                        value={editedTask.name}
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
                        value={editedTask.description}
                        onChange={handleInputChange}></textarea>
                </label>
                <br />
                <br />
                <label htmlFor="">
                    Priority:
                    <select
                        name="priority"
                        value={editedTask.priority}
                        onChange={handleInputChange}>
                        <option value="low">Low Priority</option>
                        <option value="medium">Medium Priority</option>
                        <option value="high">High Priority</option>
                    </select>
                </label>
                <br />
                <br />
                <button type="submit">Save Task</button>
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default EditTask;

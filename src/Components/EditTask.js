import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditTask = ({ editTask, onSaveTask }) => {
    const navigate = useNavigate();

    // State to manage edited task and confirmation modal visibility
    const [editedTask, setEditedTask] = useState(editTask);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    // Function to handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveTask(editedTask);
        navigate("/");
    };

    // Function to handle cancellation
    const onCancel = () => {
        // Show the confirmation modal
        setShowConfirmModal(true);
    };

    // Function to handle confirmation modal
    const handleConfirmCancel = (approve) => {
        // Close the confirmation modal
        setShowConfirmModal(false);

        if (approve) {
            // If confirmed, navigate to "/"
            navigate("/");
        }
    };

    return (
        <div className="editTask">
            <h2>Edit Task</h2>
            <form action="" onSubmit={handleSubmit}>
                {/* Task Name Input */}
                <label htmlFor="name">
                    Task Name:
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

                {/* Task Description Textarea */}
                <label htmlFor="description">
                    Task Description:
                    <textarea
                        name="description"
                        value={editedTask.description}
                        onChange={handleInputChange}></textarea>
                </label>
                <br />
                <br />

                {/* Priority Dropdown */}
                <label htmlFor="priority">
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

                {/* Save and Cancel Buttons */}
                <div className="buttons">
                    <button type="submit">Save Task</button>
                    <button type="button" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </form>

            {/* Custom confirmation modal */}
            {showConfirmModal && (
                <div className="confirm-modal">
                    <p>Are you sure about canceling the changes?</p>
                    <div className="button-group">
                        <button onClick={() => handleConfirmCancel(true)}>
                            Yes
                        </button>
                        <button onClick={() => handleConfirmCancel(false)}>
                            No
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditTask;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditTask = ({ task, onSaveTask }) => {
    const navigate = useNavigate();

    const [editedTask, setEditedTask] = useState(task);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

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

    // const onCancel = () => {
    //     const approve = confirm("are you sure about cancel the changes");
    //     if (approve) {
    //         navigate("/");
    //         return;
    //     }
    //     return;
    // };

    const onCancel = () => {
        // Show the confirmation modal
        setShowConfirmModal(true);
    };

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
                    <div
                        style={{
                            display: "flex",
                            gap: "20px",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
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

import React from "react";
import taskContext from "../context/taskContext";

const TaskList = () => {
    const value = React.useContext(taskContext);

    return (
        <div>
            <h1>{value}</h1>
        </div>
    );
};

export default TaskList;

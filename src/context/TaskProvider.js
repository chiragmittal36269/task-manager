import React from "react";
import taskContext from "./taskContext";

const TaskProvider = (props) => {
    return (
        <taskContext.Provider value={"MSD"}>
            {props.children}
        </taskContext.Provider>
    );
};

export default TaskProvider;

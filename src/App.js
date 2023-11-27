import React from "react";
import AddTask from "./Components/AddTask";
import EditTask from "./Components/EditTask";
import TaskList from "./Components/TaskList";

const App = () => {
    return (
        <div>
            <TaskList />
            <AddTask />
            <EditTask />
        </div>
    );
};

export default App;

import React from "react";
// import { Route, Routes } from "react-router-dom";
import AddTask from "./Components/AddTask";
import EditTask from "./Components/EditTask";
import TaskList from "./Components/TaskList";

const App = () => {
    return (
        <div>
            <TaskList />
            <AddTask />
            <EditTask />
            {/* <Routes>
                <Route path="/" element={<TaskList />} />
                <Route path="/add" element={<AddTask />} />
                <Route path="/edit" element={<EditTask />} />
            </Routes> */}
        </div>
    );
};

export default App;

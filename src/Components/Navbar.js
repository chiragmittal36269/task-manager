import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div
            style={{
                display: "flex",
                gap: "30px",
            }}>
            <Link to="/">Task List</Link>
            <Link to="/add">Add Task</Link>
        </div>
    );
};

export default Navbar;

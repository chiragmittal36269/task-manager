import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/">Task List</NavLink>
            <NavLink to="/add">Add Task</NavLink>
        </div>
    );
};

export default Navbar;

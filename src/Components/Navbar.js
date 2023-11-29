import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        // Navbar component for navigation links
        <div className="navbar">
            {/* Navigation link for Task List */}
            <NavLink to="/">Task List</NavLink>

            {/* Navigation link for Add Task */}
            <NavLink to="/add">Add Task</NavLink>
        </div>
    );
};

export default Navbar;

import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Create a root for concurrent rendering
const root = ReactDom.createRoot(document.getElementById("root"));

// Render the main App component into the root
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

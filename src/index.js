import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import {BrowserRouter, HashRouter } from "react-router-dom";
import { UserContextProvider } from "./Context/userContext";

ReactDOM.render(
    <UserContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </UserContextProvider>,
    document.getElementById("root")
);

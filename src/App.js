import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SideBar from "./Components/SideBar/SideBar";
import NotFoundPage from "./Pages/404/404";
import { ProtectedRoute } from "./route/ProtectedRoute";
import HotelsPage from "./Pages/Hotels/HotelsPage";
import HotelPage from "./Pages/Hotel/HotelPage";

function App() {
    return (
        <div className="app container-fluid">
            <div className="row">
                <SideBar />
                <div className="offset-2 offset-sm-1 col mt-5">
                    <Switch>
                        <Route path="/" exact />
                        <Route path="/login/" component={Login} />
                        <ProtectedRoute path="/hotels/" component={HotelsPage} exact />
                        <ProtectedRoute path="/hotels/:slug" component={HotelPage} exact/>
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";
import "./menu.scss";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import TerminalIcon from "../../../assets/icons/TerminalIcon";
import BuyersIcon from "../../../assets/icons/BuyersIcon";

export default function Menu() {
    const { width } = useWindowDimensions();

    return (
        <nav className="navbar-expand navbar-dark bg-dark">
            <ul className="navbar-nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link" to="/terminals/">
                        {width < 1000 ? <TerminalIcon />  : "Terminals"}
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/hotels/">
                    {width < 1000 ? <BuyersIcon />  : "Clients"}  
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

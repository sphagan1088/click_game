import React from "react";
import DisplayScore from "../DisplayScore";
import "./Nav.css";






const Nav = props => (
    <nav className="navbar">
        <ul>
            <li className="brand">
            <a href="/">Nintendo Clicker</a>
            
            </li>
            <DisplayScore score={props.score} topscore={props.topScore} />
            <li>
                Score: {props.score} | Top Score: {props.topScore}
            </li>
        </ul>
    </nav>
);


export default Nav;
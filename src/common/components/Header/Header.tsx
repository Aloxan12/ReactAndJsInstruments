import React from "react";
import {NavLink} from "react-router-dom";
import "./Header.css";


export const Header = () => {
    return (
        <div className="wrap-main-header">
            <div className="header-component">
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/Clock'>Clock</NavLink></li>
                    <li><NavLink to='/DragAndDrop'>DragAndDrop</NavLink></li>
                    <li><NavLink to='/MentorsStudents'>MentorsStudents</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

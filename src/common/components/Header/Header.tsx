import React from "react";
import {NavLink} from "react-router-dom";


export const Header = () => {
    return (
        <div>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/Clock'>Clock</NavLink></li>
            </ul>
        </div>
    )
}

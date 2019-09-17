import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about' activeClassName="active-link">About</NavLink></li>
                <li><NavLink to='/topic/2' activeClassName="active-link">Topic 2</NavLink></li>
                <li><NavLink to='/brokenlink' activeClassName="active-link">BrokenLink</NavLink></li>
            </ul>
        </nav>
    );
}


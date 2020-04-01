import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <footer className="flex-row">
                 <nav className="flex-row">
                    <NavLink to="/signup">Sign Up</NavLink>
                    <NavLink to="/signin">Sign In</NavLink>
                    <NavLink exact to="/">To-Do List</NavLink>
                </nav>               
            </footer>
        )
    }
}

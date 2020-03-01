import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-container">
                    <h1>Todo List</h1>
                </div>
                <Router>
                    <nav className = "links">
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/signin">Sign In</Link>
                    </nav>
                </Router>
            </header>
        )
    }
}

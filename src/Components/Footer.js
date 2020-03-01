import React, { Component } from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                 <Router>
                    <nav className = "links">
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/signin">Sign In</Link>
                    </nav>
                </Router>               
            </footer>
        )
    }
}

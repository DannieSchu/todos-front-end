import React, { Component } from 'react';
import request from 'superagent';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default class SignIn extends Component {
    state = { 
        email: '',
        password: ''
    }
    handleSignIn = async (e) => {
        e.preventDefault();
        const URL = `https://lit-reaches-94796.herokuapp.com/api/auth/signin`;
        const user = await request.post(URL, {
            email: this.state.email,
            password: this.state.password
        });
        this.props.setUser(user);
        localStorage.setItem('user', JSON.stringify(user.body));
        // <Redirect to='/' />
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSignIn}>
                    <label>Email:
                        <input onChange={(e) => this.setState({ email: e.target.value })} required/>
                    </label>
                    <label>Password:
                        <input onChange={(e) => this.setState({password: e.target.value})} required/>
                    </label>
                    <button>Sign In</button>
                </form>
                <Router>
                    <div>
                        <span>No account? </span>
                        <Link to="/signup"> Sign up!</Link>
                    </div>
                </Router>
            </div>
        )
    }
}

import React, { Component } from 'react';
import request from 'superagent';
import { BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';



export default class SignIn extends Component {
    state = { 
        emailSignIn: '',
        passwordSignIn: ''
    }
    handleSignIn = async (e) => {
        e.preventDefault();
        const URL = `https://lit-reaches-94796.herokuapp.com/api/auth/signin`;
        const user = await request.post(URL, {
            email: this.state.emailSignIn,
            password: this.state.passwordSignIn
        });
        // this.props.setUser(user);
        localStorage.setItem('user', JSON.stringify(user.body));
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSignIn}>
                    <label>Email:
                        <input onChange={(e) => this.setState({ emailSignIn: e.target.value })} required/>
                    </label>
                    <label>Password:
                        <input onChange={(e) => this.setState({passwordSignIn: e.target.value})} required/>
                    </label>
                    <button>Sign In</button>
                </form>
                <Router>
                    <div>
                        <span>No account? </span>
                        <NavLink to="/signup"> Sign up!</NavLink>
                    </div>
                </Router>
            </div>
        )
    }
}

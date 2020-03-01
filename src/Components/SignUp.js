import React, { Component } from 'react';
import request from 'superagent';

export default class SignUp extends Component {
    state = { 
        emailSignUp: '',
        passwordSignUp: ''
}
    handleSignUp = async(e) => {
        e.preventDefault();
        const URL = `https://lit-reaches-94796.herokuapp.com/api/auth/signup`
        const user = await request.post(URL, {
            email: this.state.emailSignUp,
            password: this.state.passwordSignUp
        });
        this.props.setUser(user);
        localStorage.setItem('user', JSON.stringify(user.body));
        this.props.history.push('/');
    }

    render() {
        return (
            <form onSubmit={this.handleSignUp}>
                <label>Email: 
                    <input onChange={(e) => this.setState({ emailSignUp: e.target.value })} placeholder="Your email address" />
                </label>
                <label>Password: 
                    <input onChange={(e) => this.setState({ passwordSignUp: e.target.value })} placeholder="Your email address" />
                </label>
                <button>Sign Up</button>
            </form>
        )
    }
}

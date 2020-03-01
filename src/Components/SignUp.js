import React, { Component } from 'react';
import { logInUser } from '../api-services';
import request from 'superagent';

export default class SignUp extends Component {
    state = { 
        email: '',
        password: ''
}
    handleSignUp = async(e) => {
        e.preventDefault();
        const URL = `https://lit-reaches-94796.herokuapp.com/api/auth/signup`;
        const user = await request.post(URL, {
            email: this.state.email,
            password: this.state.password
        });
        this.props.setUser(user);
        localStorage.setItem('user', JSON.stringify(user.body));
        this.props.history.push('/');
    }


    // handleSignUp = async(e) => {
    //     e.preventDefault();
    //     const user = await logInUser('signup', this.state.email, this.state.password)
    //     this.props.setUser(user);
    //     localStorage.setItem('user', JSON.stringify(user.body));
    //     this.props.history.push('/');
    // }

    render() {
        return (
            <form onSubmit={this.handleSignUp}>
                <label>Email: 
                    <input onChange={(e) => this.setState({ email: e.target.value })} required />
                </label>
                <label>Password: 
                    <input onChange={(e) => this.setState({ password: e.target.value })} required />
                </label>
                <button>Sign Up</button>
            </form>
        )
    }
}

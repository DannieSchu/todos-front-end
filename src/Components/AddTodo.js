import React, { Component } from 'react'

export default class AddTodo extends Component {
    render() {
        return (
            <div className="add">
                <input 
                    onChange={this.props.handleInput} placeholder="Create a new todo item..." 
                    />
                <button onClick={this.props.handleClick}>Add</button>
            </div>
        )
    }
}

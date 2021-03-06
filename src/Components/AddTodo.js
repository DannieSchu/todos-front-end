import React, { Component } from 'react'

export default class AddTodo extends Component {
    render() {
        return (
            <div className="flex-row">
                <input 
                    onChange={this.props.handleInput} placeholder="Create a new task..." 
                    />
                <button onClick={this.props.handleClick}>Add</button>
            </div>
        )
    }
}

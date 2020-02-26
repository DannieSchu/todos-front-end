import React, { Component } from 'react'
// import AddTask from './AddTask.js'
// import DeleteTask from './DeleteTask.js'
import request from 'superagent'
import URL from '../Api.js'

export default class TodoList extends Component {
    // initialize state of todos
    state = { todos: [] }
    
    // get todos
    componentDidMount = async() => {
        const todosData = await request.get(URL);
        this.setState({ todos: todosData.body })
        console.log(todosData)
    }

    render() {
        // const { todos } = this.state;
        // const mappedTodos = todos.map(task => 
        //     <li>{task}</li>
        // )
        return (
            <ul>
                { 
                this.state.todos.map(todo =>
                    <li>{todo.task}
                    </li>
                )
                }
            </ul>
        )
    }
}

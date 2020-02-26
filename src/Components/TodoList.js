import React, { Component } from 'react'
// import AddTask from './AddTask.js'
// import DeleteTask from './DeleteTask.js'
import { getTodos, updateTodo} from '../API-Services.js'

export default class TodoList extends Component {
    // initialize state of todos
    state = { todos: [] }
    
    // get todos
    componentDidMount = async() => {
        const todosData = getTodos();
        this.setState({ todos: todosData.body })
    }

    // toggle on/off "complete" property
    handleToggle = async (todo) => { 
            const newTodos = this.state.todos.slice();
            const matchingTodo = newTodos.find(thisTodo => todo.id === thisTodo.id);
            matchingTodo.complete = !todo.complete;
            this.setState({ todos: newTodos });    
            updateTodo(todo, matchingTodo);   
    }

    // render all todos
    render() {
        return (
            <ul>
                { 
                this.state.todos.map(todo =>
                    <li onClick={this.handleToggle(todo)} key ={todo.id}>{todo.task}
                    </li>
                )
                }
            </ul>
        )
    }
}

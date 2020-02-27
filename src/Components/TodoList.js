import React, { Component } from 'react'
import AddTodo from './AddTodo.js'
// import DeleteTodo from './DeleteTodo.js'
import { getTodos, updateTodo, createTodo } from '../api-services.js'
// import request from 'superagent'

export default class TodoList extends Component {
    // initialize state of todos
    state = { todos: [] }

    // get todos
    componentDidMount = async () => {
        const todosData = await getTodos();
        this.setState({ todos: todosData.body })
    }

    // toggle on/off "complete" property
    handleToggle = async (todo) => {
        // create new array
        const newTodos = this.state.todos.slice();
        // find matching todo by id
        const matchingTodo = newTodos.find(thisTodo => todo.id === thisTodo.id);
        // toggle complete property
        matchingTodo.complete = !todo.complete;
        // set state
        this.setState({ todos: newTodos });
        // update todo in database    
        await updateTodo(todo, matchingTodo);
    }

    handleClick = async() => {
        // create an object for the new todo
        const newTodo = {
            id: Math.random(),
            task: this.state.todoInput,
            complete: false
        }
        // create a new array of todos with the new todo 
        const newTodos = [...this.state.todos, newTodo];
        this.setState({ todos: newTodos });
        await createTodo({ task: this.state.todoInput }); 

    }

    handleInput = (e) => {
        this.setState({ todoInput: e.target.value })
    }

    // render all todos
    render() {
        const { todos } = this.state;
        const mappedTodos = todos.map(todo =>
            <li 
                style={{textDecoration: todo.complete ? 'line-through' : 'none'}} 
                onClick={() => this.handleToggle(todo)} 
                key={todo.id}
                >
                {todo.task}
            </li>
        )
        return (
            <main>
                <div className="list-container">
                    <ul>
                        {mappedTodos}
                    </ul>
                </div>
                <div className="add-container">
                    <AddTodo 
                        todoInput={this.state.todoInput}
                        handleInput={this.handleInput}
                        handleClick={this.handleClick}
                        />
                </div>
            </main>
        )
    }
}

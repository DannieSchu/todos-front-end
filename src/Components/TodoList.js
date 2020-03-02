import React, { Component } from 'react'
import AddTodo from './AddTodo.js'
import DeleteTodo from './DeleteTodo.js'
import { getTodos, updateTodo, createTodo, deleteTodo } from '../api-services.js'

export default class TodoList extends Component {
    // initialize state of todos
    state = { todos: [] }

    // get todos
    componentDidMount = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const todosData = await getTodos(user.token);
        this.setState({ todos: todosData.body });
    }

    // toggle on/off "complete" property
    handleToggle = async (todo) => {
        // get user from local storage and parse
        const user = JSON.parse(localStorage.getItem('user'));
        // create new array
        const newTodos = this.state.todos.slice();
        // find matching todo by id
        const matchingTodo = newTodos.find(thisTodo => todo.id === thisTodo.id);
        // toggle complete property
        matchingTodo.complete = !todo.complete;
        // set state
        this.setState({ todos: newTodos });
        // update todo in database    
        await updateTodo(todo, matchingTodo, user.token);
    }

    handleDelete = async(e) => {
        const deletedTodo = e.target.id;
        const newTodos = this.state.todos.slice();
        newTodos.splice(this.state.todos.findIndex(deletedTodo), 1);
        this.setState({
            todos: newTodos
        })
        await deleteTodo(deletedTodo);
        
        // // create new array to mutate
        // const newTodos = this.state.todos.slice();
        // // find index of todo in array
        // const index = newTodos.indexOf(todo);
        // // mutate array
        // newTodos.splice(index, 1);
        // // update state
        // this.setState({ todos: newTodos })
        // // delete todo associated with user in api
        // await deleteTodo(todo, user.token);
    }

    handleClick = async() => {
        // create an object for the new todo
        const newTodo = {
            id: Math.random(),
            task: this.state.todoInput,
            complete: false
        }
        // get user from local storage and parse
        const user = JSON.parse(localStorage.getItem('user'));
        // append new todo to current todos list and store in new array
        const newTodos = [...this.state.todos, newTodo];
        // set this array as state
        this.setState({ todos: newTodos });
        
        await createTodo({ task: this.state.todoInput }, user.token); 
    }

    // render all todos
    render() {
        const { todos } = this.state;
        const mappedTodos = todos.map(todo =>
            <li 
                style={
                    {textDecoration: todo.complete ? 'line-through' : 'none'}
                } 
                onClick={() => this.handleToggle(todo)} 
                key={todo.id}
                >
                {todo.task}
                <button onClick={() => this.handleDelete}>Delete</button>
                {/* <button onClick={() => this.handleDelete(todo)}>Delete</button> */}
            </li>
        )
        return (
            <main className="flex-column">
                {todos.length > 0 &&
                    <div className="flex-column"
                        style={{
                            display: this.state.todos ? 'flex' : 'none'}
                        }>
                        <ol>
                            {mappedTodos}
                        </ol>
                    </div>
                }
                <div className="flex-column">
                    <AddTodo 
                        todoInput={this.state.todoInput}
                        handleInput={(e) => this.setState({ todoInput: e.target.value})}
                        handleClick={this.handleClick}
                        />
                </div>
            </main>
        )
    }
}

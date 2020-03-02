import request from 'superagent'

const URL = `https://lit-reaches-94796.herokuapp.com/api`;

const user = JSON.parse(localStorage.getItem('user'));

export async function getTodos() {
    return await request.get(`${URL}/todos`).set('Authorization', user.token);
}

export async function updateTodo(todo, matchingTodo) {
    const data = await request.put(`${URL}/todos/${todo.id}`, matchingTodo).set('Authorization', user.token);
}

export async function createTodo(newTodoObject) {
    const data = await request.post(`${URL}/todos`, newTodoObject).set('Authorization', user.token);
}

export async function deleteTodo(todo) {
    const data = await request.delete(`${URL}/todos/${todo.id}`).set('Authorization', user.token);
}

export async function logInUser(param) {
    await request.post(`${URL}/auth/${param}`, {
        email: user.email,
        password: user.password
    });
}


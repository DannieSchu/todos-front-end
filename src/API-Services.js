import request from 'superagent'

const URL = `https://lit-reaches-94796.herokuapp.com/api`;

export async function getTodos(token) {
    return await request.get(`${URL}/todos`).set('Authorization', token);
}

export async function updateTodo(todo, matchingTodo, token) {
    const data = await request.put(`${URL}/todos/${todo.id}`, matchingTodo).set('Authorization', token);
}

export async function createTodo(newTodoObject, token) {
    const data = await request.post(`${URL}/todos`, newTodoObject).set('Authorization', token);
}

export async function logInUser(param, userEmail, userPassword) {
    await request.post(`${URL}/auth/${param}`, {
        email: userEmail,
        password: userPassword
    });
}


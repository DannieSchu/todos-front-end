import request from "superagent"

const URL = `https://lit-reaches-94796.herokuapp.com/api/todos`

export async function getTodos() {
    return await request.get(URL);
}

export async function updateTodo (todo, matchingTodo) {
    return await request.put(`${URL}/${todo.id}`, matchingTodo.complete);
}
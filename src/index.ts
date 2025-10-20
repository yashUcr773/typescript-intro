interface Todo {
    title: string;
    completed: boolean;
}

const todos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]')

todos.forEach(todo => renderTodo(todo))

document.querySelector('#add-todo')?.addEventListener('click', () => {
    const todoInput = (document.querySelector('#todo-input') as HTMLInputElement)
    const title = todoInput.value;
    todoInput.value = "";
    const todo: Todo = { title, completed: false }
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodo(todo)
})

function renderTodo(todo: Todo) {
    const todoContainer = document.querySelector('#todos-container');
    const todoElement = document.createElement('li')
    todoElement.innerText = todo.title
    const todoCheckbox = document.createElement('input')
    todoCheckbox.type = 'checkbox'
    todoCheckbox.addEventListener('click', function (e) {
        todo.completed = (e.target as HTMLFormElement).checked
        localStorage.setItem('todos', JSON.stringify(todos))
    })
    todoCheckbox.checked = todo.completed
    todoElement.append(todoCheckbox)
    todoContainer?.appendChild(todoElement)
}
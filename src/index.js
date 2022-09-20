import './styles.css';

import {  Todo,TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';

export const todoList = new TodoList();
// export const todos = new Todo();


console.log(todoList.todos);

// todoList.todos.forEach(todo=>crearTodoHtml(todo)); Forma larga
todoList.todos.forEach(crearTodoHtml); //Forma corta
// const newTodo = new Todo('Aprender JavaScript');
// newTodo.imprimirClase();
todoList.todos[0].imprimirClase();
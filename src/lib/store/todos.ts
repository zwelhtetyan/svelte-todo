import { writable } from 'svelte/store';
import { AddNewTodo } from '../model/todo';
import type { Todo } from '../types';

export const todos = writable<Todo[]>(getFromLs('todos') || []);
export const category = writable('ALL');

function addToLS(key: string, value: Todo[]) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromLs(key: string) {
  return JSON.parse(localStorage.getItem(key));
}

todos.subscribe((todos) => addToLS('todos', todos));

export function addTodo(taskName: string) {
  const newTodo = new AddNewTodo(taskName);
  todos.update((preTodos) => [...preTodos, newTodo]);
}

export function editTodo(id: string, updatedTaskName: string) {
  todos.update((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === id ? { ...todo, taskName: updatedTaskName } : todo
    )
  );
}

export function deleteTodo(id: string) {
  todos.update((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
}

export function checkUncheck(id: string) {
  todos.update((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )
  );
}

export function clearALLComplete() {
  todos.update((prevTodos) => prevTodos.filter((todo) => !todo.done));
}

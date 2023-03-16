import { writable } from 'svelte/store';
import { AddNewTodo } from '../model/todo';
import type { TodoItem } from '../types';

export const todos = writable<TodoItem[]>([
  { id: '1', taskName: 'task 1', done: false },
  { id: '2', taskName: 'task 2', done: true },
]);

export function addTodo(taskName: string) {
  const newTodo = new AddNewTodo(taskName);
  todos.update((preTodos) => [...preTodos, newTodo]);
}

export function checkUncheck(id: string) {
  todos.update((prevTodo) =>
    prevTodo.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )
  );
}

import type { Writable } from 'svelte/store';
import type { Todo } from '../types';

export function filterTodos(category: string, todos: Todo[]) {
  let filteredTodos: Todo[];

  switch (category) {
    case 'ACTIVE':
      filteredTodos = todos.filter((todo) => !todo.done);
      break;
    case 'COMPLETED':
      filteredTodos = todos.filter((todo) => todo.done);
      break;
    default:
      filteredTodos = todos;
  }

  return filteredTodos;
}

export function changeCategory(
  category: Writable<string>,
  categoryName: string
) {
  category.set(categoryName);
}

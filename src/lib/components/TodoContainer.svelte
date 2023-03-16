<script lang="ts">
  import TodoItem from './TodoItem.svelte';
  import { todos } from '../store/todos';

  const hoverText = 'hover:text-black hover:dark:text-white transition-all';
</script>

<main
  class="flex-1 flex flex-col items-center px-4 bg-c1 dark:bg-c6 transition-all"
>
  <div
    class="w-full bg-c1 dark:bg-c7 max-w-lg -mt-11 rounded overflow-hidden shadow-container-shadow transition-all"
  >
    {#each $todos as todo (todo.id)}<TodoItem {...todo} />{/each}

    <div
      class="flex justify-between py-3 px-4 text-sm text-c4 dark:text-c10 transition-all"
    >
      <p>5 items left</p>
      <div class="space-x-3 hidden xs:block">
        <button class="{hoverText}">All</button>
        <button class="{hoverText}">Active</button>
        <button class="{hoverText}">Completed</button>
      </div>
      <button class="{hoverText}">Clear Completed</button>
    </div>
  </div>

  <div
    class="space-x-3 h-12 flex xs:hidden bg-c1 dark:bg-c7 text-c4 dark:text-c10 w-full mt-4 items-center justify-center shadow-container-shadow transition-all"
  >
    <button class="{hoverText}">All</button>
    <button class="{hoverText}">Active</button>
    <button class="{hoverText}">Completed</button>
  </div>

  <p class="my-12 text-c4 dark:text-c10">Drag and drop to reorder list</p>
</main>

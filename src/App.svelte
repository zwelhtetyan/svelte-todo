<script lang="ts">
  import { null_to_empty } from 'svelte/internal';
  import { writable } from 'svelte/store';
  import { fade } from 'svelte/transition';
  import type { TodoItem } from './types';

  const todoStore = writable<TodoItem[]>([]);
  let inputRef: HTMLInputElement;

  function addTodo() {
    if (!inputRef.value.trim()) return;

    const newTodo: TodoItem = {
      id: new Date().getTime().toString(),
      taskName: inputRef.value,
      done: false,
    };

    todoStore.update((prevTodos) => [...prevTodos, newTodo]);

    inputRef.value = '';
  }
</script>

<main>
  <form on:submit|preventDefault="{addTodo}">
    <input type="text" bind:this="{inputRef}" />
    <button>+</button>
  </form>

  {#if $todoStore.length > 0}
    <ol>
      {#each $todoStore as todo}
        <li transition:fade>
          {todo.taskName}
        </li>
      {/each}
    </ol>
  {:else}
    <p>Please make your first todo.</p>
  {/if}
</main>

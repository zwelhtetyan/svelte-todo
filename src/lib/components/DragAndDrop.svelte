<script lang="ts">
  import { flip } from 'svelte/animate';
  import { todos, category } from '../store/todos';
  import { filterTodos } from '../utils/todo';
  import TodoItem from './TodoItem.svelte';

  let hovering: any = false;

  const drop = (event: DragEvent, target: number) => {
    event.dataTransfer.dropEffect = 'move';
    const start = parseInt(event.dataTransfer.getData('text/plain'));
    const newTracklist = $todos;

    if (start < target) {
      newTracklist.splice(target + 1, 0, newTracklist[start]);
      newTracklist.splice(start, 1);
    } else {
      newTracklist.splice(target, 0, newTracklist[start]);
      newTracklist.splice(start + 1, 1);
    }

    todos.set([...newTracklist]);

    hovering = null;
  };

  const dragstart = (event: DragEvent, i: number) => {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.dropEffect = 'move';
    const start = i;
    event.dataTransfer.setData('text/plain', start.toString());
  };

  const dragEnter = (index) => {
    hovering = index;
  };

  const dragLeave = () => {
    hovering = null;
  };
</script>

<div class="list">
  {#each filterTodos($category, $todos) as todo, index (todo.id)}
    <div
      class="list-item"
      animate:flip
      draggable="{true}"
      on:dragstart="{(event) => dragstart(event, index)}"
      on:drop|preventDefault="{(event) => drop(event, index)}"
      ondragover="return false"
      on:dragenter="{() => dragEnter(index)}"
      on:dragleave="{() => dragLeave()}"
      class:is-active="{hovering === index}"
    >
      <TodoItem {...todo} />
    </div>
  {/each}
</div>

<style>
  .list-item::marker {
    content: '';
  }
</style>

<svelte:options immutable="{true}" />

<script lang="ts">
  import DragDropList, {
    VerticalDropZone,
    reorder,
    type DropEvent,
  } from 'svelte-dnd-list';
  import { todos, category } from '../store/todos';
  import { filterTodos } from '../utils/todo';
  import TodoItem from './TodoItem.svelte';

  function onDrop({ detail: { from, to } }: CustomEvent<DropEvent>) {
    if (!to || from === to || $category !== 'ALL') {
      return;
    }

    todos.set(reorder($todos, from.index, to.index));
  }
</script>

<DragDropList
  id="dnd"
  type="{VerticalDropZone}"
  itemSize="{61}"
  itemCount="{filterTodos($category, $todos).length}"
  on:drop="{onDrop}"
  let:index
>
  <TodoItem {...filterTodos($category, $todos)[index]} />
</DragDropList>

<script lang="ts">
  import { todos, category, clearALLComplete } from '../store/todos';
  import { filterTodos } from '../utils/todo';
  import CategoryButton from './CategoryButton.svelte';
  import DragAndDrop from './DragAndDrop.svelte';

  const categoryArr = [
    { categoryName: 'ALL', text: 'All' },
    { categoryName: 'ACTIVE', text: 'Active' },
    { categoryName: 'COMPLETED', text: 'Completed' },
  ];

  const hoverText = 'hover:text-black hover:dark:text-white transition-all';
</script>

<main
  class="flex-1 flex flex-col items-center px-4 bg-c1 dark:bg-c6 transition-all"
>
  {#if $todos.length > 0}
    <div
      class="w-full bg-c1 dark:bg-c7 max-w-lg -mt-11 rounded overflow-hidden shadow-container-shadow transition-all"
    >
      <!-- {#each filterTodos($category, $todos) as todo (todo.id)}
        <TodoItem {...todo} />
      {/each} -->

      <DragAndDrop />

      <div
        class="flex justify-between py-3 px-4 text-sm text-c4 dark:text-c10 transition-all"
      >
        <p>{filterTodos('ACTIVE', $todos).length} items left</p>

        <div class="space-x-3 hidden xs:block">
          {#each categoryArr as ctg (ctg.categoryName)}
            <CategoryButton
              category="{category}"
              currentCategoryName="{$category}"
              categoryName="{ctg.categoryName}"
              text="{ctg.text}"
            />
          {/each}
        </div>

        <button class="{hoverText}" on:click="{clearALLComplete}"
          >Clear Completed</button
        >
      </div>
    </div>
  {/if}

  {#if $todos.length > 0}
    <div
      class="space-x-3 h-12 flex xs:hidden bg-c1 dark:bg-c7 text-c4 dark:text-c10 w-full mt-4 items-center justify-center shadow-container-shadow transition-all"
    >
      {#each categoryArr as ctg (ctg.categoryName)}
        <CategoryButton
          category="{category}"
          currentCategoryName="{$category}"
          categoryName="{ctg.categoryName}"
          text="{ctg.text}"
        />
      {/each}
    </div>
  {/if}

  <p class="my-12 text-c4 dark:text-c10">Drag and drop to reorder list</p>
</main>

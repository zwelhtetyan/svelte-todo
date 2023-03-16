<script lang="ts">
  import type { Writable } from 'svelte/store';
  import { changeCategory } from '../utils/todo';

  const hoverText =
    'text-sm hover:text-black hover:dark:text-white transition-all';

  export let category: Writable<string>;
  export let categoryName: string;
  export let text: string;
  export let currentCategoryName: string;
</script>

<button on:click="{() => changeCategory(category, categoryName)}">
  <p
    class="{hoverText} text-sm capitalize {currentCategoryName ===
      categoryName && 'text-bright-blue'}"
  >
    {text}
  </p>
</button>

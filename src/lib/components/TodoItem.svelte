<script lang="ts">
  import { fade } from 'svelte/transition';
  import checkIcon from '../../assets/images/icon-check.svg';
  import { checkUncheck } from '../store/todos';

  export let id: string;
  export let taskName: string;
  export let done: boolean;
</script>

<div
  transition:fade
  class="min-h-[3.5rem] p-4 border-b border-b-c2 dark:border-b-c12 flex items-center cursor-pointer transition-all"
>
  <!-- check circle -->
  <button
    on:click="{() => checkUncheck(id)}"
    class="{`mr-4 w-6 h-6 rounded-full p-[1px] transition-all bg-c2 dark:bg-c12 hover:bg-check-bg ${
      done ? 'bg-check-bg' : ''
    }`}"
  >
    <div
      class="{`w-full h-full rounded-full flex items-center justify-center bg-c1 dark:bg-c7 transition-all ${
        done ? 'bg-check-bg' : ''
      }`}"
    >
      {#if done}
        <img src="{checkIcon}" alt="check icon" class="w-3" />
      {/if}
    </div>
  </button>

  <p
    class="{`flex-1 text-lg text-c5 dark:text-c8 ${
      done ? 'line-through' : ''
    }`}"
  >
    {taskName}
  </p>
</div>

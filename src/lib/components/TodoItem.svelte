<script lang="ts">
  import { fade } from 'svelte/transition';
  import iconCross from '../../assets/images/icon-cross.svg';
  import checkIcon from '../../assets/images/icon-check.svg';
  import { checkUncheck } from '../store/todos';

  export let id: string;
  export let taskName: string;
  export let done: boolean;
</script>

<div
  transition:fade
  class="min-h-[3.5rem] p-4 border-b border-b-c2 dark:border-b-c12 flex items-center justify-between transition-all"
>
  <div class="flex-1 flex items-center">
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
      class="{`flex-1 cursor-pointer text-lg text-c5 dark:text-c8 ${
        done ? 'line-through' : ''
      }`}"
    >
      {taskName}
    </p>
  </div>

  <div class="ml-4 flex items-center space-x-4">
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="{1.5}"
        stroke="hsl(235, 19%, 35%)"
        class="w-[22px] h-[22px]"
      >
        <path
          stroke-Linecap="round"
          stroke-linejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
        ></path>
      </svg>
    </button>
    <button>
      <img src="{iconCross}" alt="delete icon" class="w-5 h-5" />
    </button>
  </div>
</div>

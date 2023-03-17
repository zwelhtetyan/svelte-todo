<script lang="ts">
  import type { Writable } from 'svelte/store';
  import iconCross from '../../assets/images/icon-cross.svg';

  import { deleteTodo } from '../store/todos';

  export let taskElement: HTMLParagraphElement;
  export let id: string;
  export let isEdit: Writable<boolean>;
  export let removeEditable: () => void;

  $: $isEdit = $isEdit; // reactive prop

  function handleEdit() {
    if (isEdit) {
      removeEditable();
    }

    (taskElement.contentEditable as any) = true;
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(taskElement);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
    taskElement.focus();

    isEdit.set(true);
  }
</script>

<div class="ml-4 flex items-center space-x-4">
  <button on:click="{handleEdit}">
    {#if $isEdit}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="{1.5}"
        stroke="hsl(235, 19%, 35%)"
        class="w-7 h-w-7"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 12.75l6 6 9-13.5"></path>
      </svg>
    {:else}
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
    {/if}
  </button>

  <button on:click="{() => deleteTodo(id)}" class="w-5 h-5">
    <img src="{iconCross}" alt="delete icon" class="w-5 h-5" />
  </button>
</div>

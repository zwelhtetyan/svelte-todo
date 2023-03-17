<script lang="ts">
  import { writable } from 'svelte/store';
  import checkIcon from '../../assets/images/icon-check.svg';
  import { checkUncheck, editTodo, category } from '../store/todos';
  import ActionButton from './ActionButton.svelte';

  export let id: string;
  export let taskName: string;
  export let done: boolean;

  let taskElement: HTMLParagraphElement;
  let isEdit = writable(false);

  function removeEditable(id: string, elem: any) {
    editTodo(id, elem.textContent);
    elem.contentEditable = false;
    isEdit.set(false);
  }
</script>

<div
  class="{`overflow-x-auto a min-h-[3.5rem] bg-c1 dark:bg-c7 p-4 border-b border-b-c2 dark:border-b-c12 flex items-center justify-between transition-all ${
    $category === 'ALL' && 'cursor-move'
  }`}"
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

    <div class="flex-1">
      <p
        class="{`inline-block text-lg text-c5 dark:text-c8 ${
          done ? 'line-through' : ''
        }`}"
        bind:this="{taskElement}"
        on:blur="{() => removeEditable(id, taskElement)}"
      >
        {taskName}
      </p>
    </div>
  </div>

  <ActionButton
    id="{id}"
    taskElement="{taskElement}"
    isEdit="{isEdit}"
    removeEditable="{() => removeEditable(id, taskElement)}"
  />
</div>

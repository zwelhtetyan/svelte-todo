<script lang="ts">
  import moon from '../../assets/images/icon-moon.svg';
  import sun from '../../assets/images/icon-sun.svg';
  import { theme, themeToggler } from '../store/theme';
  import { addTodo } from '../store/todos';

  let todoInput: HTMLInputElement;

  function handleAddTodo() {
    const taskName = todoInput.value.trim();

    if (!taskName) return;

    addTodo(taskName);

    todoInput.value = '';
  }
</script>

<div
  class="min-h-[200px] h-[35vh] xs:h-[38vh] pb-16 px-4 flex items-end justify-center bg-bg-img-mobile xs:bg-bg-img-desktop bg-cover bg-center transition-all"
>
  <div class="w-full max-w-lg">
    <header class="flex justify-between mb-6">
      <h1 class="text-4xl uppercase text-white font-semibold tracking-[.5rem]">
        Todo
      </h1>

      <button
        class="w-9 h-9 flex items-center justify-center"
        on:click="{() => themeToggler($theme)}"
      >
        <img
          src="{$theme === 'dark' ? sun : moon}"
          alt="theme-icon"
          class="w-6 h-6"
        />
      </button>
    </header>

    <form
      on:submit|preventDefault="{handleAddTodo}"
      class="relative h-14 w-full rounded overflow-hidden flex items-center bg-c1 dark:bg-c7 transition-all"
    >
      <input
        type="text"
        name="todo"
        bind:this="{todoInput}"
        placeholder="Create a new todo..."
        class="w-full h-full focus:outline-none pl-14 pr-4 text-lg caret-bright-blue bg-transparent"
      />
      <div
        class="absolute left-4 w-6 h-6 rounded-full border border-c2 dark:border-c12 transition-all"
      ></div>
    </form>
  </div>
</div>

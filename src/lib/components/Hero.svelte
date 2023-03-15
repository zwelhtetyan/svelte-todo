<script lang="ts">
  import moon from '../../assets/images/icon-moon.svg';
  import sun from '../../assets/images/icon-sun.svg';
  import { theme, themeToggler } from '../store/theme';
</script>

<div
  class="h-[30vh] xs:h-[38vh] flex items-center justify-center bg-bg-img-mobile xs:bg-bg-img-desktop bg-cover bg-center"
>
  <div class="w-full max-w-md">
    <header class="flex justify-between mb-6">
      <h1 class="text-4xl uppercase text-white font-bold tracking-[.7rem]">
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

    <div class="relative h-[52px] w-full flex items-center">
      <input
        type="text"
        placeholder="Create a new todo..."
        class="w-full h-full rounded focus:outline-none pl-14 pr-4 text-lg caret-bright-blue"
      />
      <div
        class="absolute left-4 w-6 h-6 rounded-full border border-[var(--very-light-grayish-blue)]"
      ></div>
    </div>
  </div>
</div>

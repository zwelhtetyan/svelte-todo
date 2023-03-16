<script lang="ts">
  import checkIcon from '../../assets/images/icon-check.svg';

  export let id;
  export let taskName;
  export let done;
</script>

<div
  class="h-14 p-4 border-b border-b-c2 dark:border-b-c12 flex items-center cursor-pointer transition-all"
>
  <!-- check circle -->
  <div
    class="mr-4 w-6 h-6 rounded-full p-[1px] transition-all bg-c2 dark:bg-c12 hover:bg-check-bg"
  >
    <div
      class="w-full h-full rounded-full flex items-center justify-center bg-c1 dark:bg-c7 transition-all"
    >
      <!-- <img src="{checkIcon}" alt="check icon" class="w-3" /> -->
    </div>
  </div>

  <p class="text-lg text-c5 dark:text-c8">{taskName}</p>
</div>

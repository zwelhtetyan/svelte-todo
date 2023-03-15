<script>
  import Spaghetti from '../utils/Spaghetti.svelte';
</script>

<div class="min-h-screen flex flex-col">
  <Spaghetti />
  <slot name="hero" />
  <slot name="container" />
</div>

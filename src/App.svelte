<script lang="ts">
  import Hero from './lib/components/Hero.svelte';
  import Layout from './lib/components/Layout.svelte';
  import TodoContainer from './lib/components/TodoContainer.svelte';
</script>

<Layout>
  <Hero slot="hero" />
  <TodoContainer slot="container" />
</Layout>

<script lang="ts">
  if (
    localStorage.theme === 'dark' ||
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
  }
</script>

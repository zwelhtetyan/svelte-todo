import { writable } from 'svelte/store';

export const theme = writable(localStorage.getItem('theme') || 'light');

export function themeToggler(currentTheme: string) {
  if (currentTheme === 'dark') {
    localStorage.setItem('theme', 'light');
    document.documentElement.classList.remove('dark');
    theme.set('light');
  } else {
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');
    theme.set('dark');
  }
}

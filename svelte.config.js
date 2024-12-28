import sveltePreprocess from 'svelte-preprocess';
import { defineConfig } from 'vite';

export default {
  kit: {
    // Your other config options here
    vite: defineConfig({
      // Vite-specific options
    }),
  },
  preprocess: sveltePreprocess(),
};

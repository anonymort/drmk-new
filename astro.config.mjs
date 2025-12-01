import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://drmk.link',
  output: 'static',
  vite: {
    css: {
      postcss: {
        plugins: [
          (await import('@tailwindcss/postcss')).default,
        ],
      },
    },
  },
});

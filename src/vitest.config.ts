import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
  },
  base: "/todo/" // IMPORTANT: Add this line if deployed to a subdirectory
});
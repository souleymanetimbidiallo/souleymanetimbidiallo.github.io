import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const emptyModule = fileURLToPath(new URL('./src/testing/empty-module.ts', import.meta.url));

export default defineConfig({
  resolve: {
    // ngx-markdown lazy-imports optional extensions the site doesn't install.
    alias: { 'marked-katex-extension': emptyModule },
  },
});

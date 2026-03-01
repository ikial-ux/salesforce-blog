import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';

import react from '@astrojs/react';

import markdoc from '@astrojs/markdoc';

export default defineConfig({
  integrations: [keystatic(), react(), markdoc()],
  //output: 'hybrid', // Esto permite que el panel de admin funcione bien
});
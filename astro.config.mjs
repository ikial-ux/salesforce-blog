import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';

export default defineConfig({
  integrations: [keystatic()],
  output: 'hybrid', // Esto permite que el panel de admin funcione bien
});
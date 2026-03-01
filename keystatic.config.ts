import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: { kind: 'local' }, // Por ahora guardamos en tu PC, luego lo conectaremos a GitHub
  collections: {
    posts: collection({
      label: 'Artículos',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        content: fields.markdoc({ label: 'Contenido del artículo' }),
      },
    }),
  },
});
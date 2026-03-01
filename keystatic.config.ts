import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },
  collections: {
    posts: collection({
      label: 'Artículos de Salesforce',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título del artículo' } }),
        date: fields.date({ label: 'Fecha de publicación', defaultValue: { kind: 'today' } }),
        language: fields.select({
          label: 'Idioma',
          options: [
            { label: 'Español', value: 'es' },
            { label: 'English', value: 'en' },
          ],
          defaultValue: 'es',
        }),
        category: fields.select({
          label: 'Categoría',
          options: [
            { label: 'CPQ', value: 'cpq' },
            { label: 'Billing', value: 'billing' },
            { label: 'General', value: 'general' },
          ],
          defaultValue: 'general',
        }),
        content: fields.markdoc({
          label: 'Contenido',
          description: 'Escribe aquí tu artículo. Puedes usar negritas y bloques de código.',
        }),
      },
    }),
  },
});
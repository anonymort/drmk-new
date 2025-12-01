import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const signals = defineCollection({
  loader: file('src/data/signals.json'),
  schema: z.object({
    id: z.string(),
    title: z.string().min(1).max(200),
    url: z.string().url(),
    annotation: z.string().max(500),
    tags: z.array(
      z.enum([
        'medicine',
        'regulation',
        'gmc',
        'bma',
        'competition',
        'law',
        'foi',
        'tech',
        'ai',
        'projects',
      ])
    ),
    provenance: z.enum(['official', 'foi', 'press', 'research', 'tech-doc']),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  }),
});

export const collections = { signals };

export type Signal = z.infer<typeof signals.schema>;
export type Provenance = Signal['provenance'];
export type Tag = Signal['tags'][number];

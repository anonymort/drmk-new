import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const allSignals = await getCollection('signals');
  const sortedSignals = allSignals
    .map((entry) => entry.data)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return rss({
    title: 'Signals | drmk.link',
    description:
      'High-signal links on UK medical policy, regulation, competition law, and technology.',
    site: context.site ?? 'https://drmk.link',
    items: sortedSignals.map((signal) => ({
      title: signal.title,
      pubDate: new Date(signal.date),
      description: signal.annotation,
      link: signal.url,
      categories: signal.tags,
    })),
    customData: `<language>en-gb</language>`,
  });
}

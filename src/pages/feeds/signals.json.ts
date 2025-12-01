import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const allSignals = await getCollection('signals');
  const sortedSignals = allSignals
    .map((entry) => entry.data)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: 'Signals | drmk.link',
    home_page_url: site?.toString() ?? 'https://drmk.link',
    feed_url: new URL('/feeds/signals.json', site).toString(),
    description:
      'High-signal links on UK medical policy, regulation, competition law, and technology.',
    authors: [
      {
        name: 'Matt Kneale',
        url: 'https://drmk.link',
      },
    ],
    language: 'en-GB',
    items: sortedSignals.map((signal) => ({
      id: signal.id,
      url: signal.url,
      external_url: signal.url,
      title: signal.title,
      content_text: signal.annotation,
      date_published: new Date(signal.date).toISOString(),
      tags: signal.tags,
      _drmk: {
        provenance: signal.provenance,
      },
    })),
  };

  return new Response(JSON.stringify(feed, null, 2), {
    headers: {
      'Content-Type': 'application/feed+json; charset=utf-8',
    },
  });
};

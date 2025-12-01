# drmk.link

High-signal link feed on UK medical policy, regulation, competition law, and technology.

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Signals

### Using Claude Code

```bash
/add-signal GMC fitness to practise annual report
```

The slash command will:
1. Search for authoritative sources
2. Generate a validated signal entry
3. Add it to `src/data/signals.json`

### Manual

Edit `src/data/signals.json` directly:

```json
{
  "id": "unique-kebab-case-id",
  "title": "Concise factual title",
  "url": "https://primary-source.example.com",
  "annotation": "One sentence explaining significance.",
  "tags": ["medicine", "regulation"],
  "provenance": "official",
  "date": "2025-12-01"
}
```

## Signal Schema

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique kebab-case identifier |
| `title` | string | Factual title, max 200 chars |
| `url` | string | Link to primary source |
| `annotation` | string | One sentence, max 25 words |
| `tags` | array | 1-3 from: medicine, regulation, gmc, bma, competition, law, foi, tech, ai, projects |
| `provenance` | string | One of: official, foi, press, research, tech-doc |
| `date` | string | YYYY-MM-DD format |

## Feeds

- JSON Feed: `/feeds/signals.json`
- RSS: `/rss.xml`

## Deployment

Deployed to GitHub Pages via GitHub Actions on push to `main`.

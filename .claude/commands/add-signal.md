---
description: Search the web for high-signal content and add it to the Signals feed
---

# Add Signal to drmk.link

You are generating a new entry for the drmk.link Signals feed based on the topic: **$ARGUMENTS**

## Instructions

1. **Search the web** for the most authoritative, primary source related to the topic
2. **Prioritise** in this order:
   - Official government/regulatory documents (legislation.gov.uk, gov.uk, gmc-uk.org, bma.org.uk, england.nhs.uk)
   - FOI disclosures (whatdotheyknow.com)
   - Peer-reviewed research or preprints
   - Technical documentation
   - Established press reporting on verifiable facts
3. **Reject** opinion pieces, commentary, low-quality blogs, or content not anchored to a primary source

## Signal Schema

Generate a JSON object with these fields:

```json
{
  "id": "kebab-case-unique-id",
  "title": "Concise factual title (no adjectives, max 200 chars)",
  "url": "https://primary-source.example.com/path",
  "annotation": "One sentence (max 25 words) explaining why this matters.",
  "tags": ["tag1", "tag2"],
  "provenance": "official|foi|press|research|tech-doc",
  "date": "YYYY-MM-DD"
}
```

### Tags (pick 1-3)

- `medicine` - Clinical practice, healthcare delivery
- `regulation` - Regulatory guidance, compliance
- `gmc` - General Medical Council specific
- `bma` - British Medical Association specific
- `competition` - Competition law, antitrust, markets
- `law` - Legal developments, legislation
- `foi` - Freedom of Information disclosures
- `tech` - Technology, software, digital
- `ai` - Artificial intelligence specific
- `projects` - Fyllio, SkillsForDocs, DAUK, personal projects

### Provenance

- `official` - Government, NHS, GMC, BMA, Royal Colleges, Parliament, regulators
- `foi` - WhatDoTheyKnow, direct FOI responses, disclosures
- `press` - Established press reporting on verifiable factual developments
- `research` - Peer-reviewed papers, preprints from trusted servers
- `tech-doc` - Documentation for AI models, code libraries, standards, hardware

## Output

1. Show me the signal entry as formatted JSON
2. Ask for confirmation before adding
3. When confirmed, append the new signal to `src/data/signals.json` (add to the beginning of the array)
4. Validate the JSON is correctly formatted

## Example

For topic "CMA digital health investigation":

```json
{
  "id": "cma-digital-health-investigation-2025",
  "title": "CMA opens investigation into digital health contract terms",
  "url": "https://www.gov.uk/cma-cases/digital-health-market-study",
  "annotation": "CMA will assess whether sector contracts restrict market entry in digital health platforms.",
  "tags": ["competition", "law", "tech"],
  "provenance": "official",
  "date": "2025-12-01"
}
```

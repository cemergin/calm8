# EventSeek (codename: calm8)

A Chrome extension that extracts event information from webpages and allows users to add them to Google Calendar.

## Current Features

- Scrapes event data:
  - Event name
  - Date
  - Time
  - Venue
  - URL
  - Description
- Default extractor with defensive scraping
- Popup UI placeholder
- Clean, scalable folder structure
- TypeScript & React
- ESLint + Prettier
- Vite build with multiple entry points
- Manual build method for better stability (no plugin lock-in)

## Folder Structure

src/
├── content/
│   ├── content.ts
│   ├── extractors/
│   │   └── default.ts
│   └── ui/
│       └── calendarButton.ts
├── popup/
│   ├── popup.html
│   ├── popup.tsx
│   └── App.tsx
├── types/
│   └── EventData.ts
├── utils/
│   ├── calendarLink.ts
│   └── domainUtils.ts
├── ai/
│   └── smartExtractor.ts (empty for now)

## Build Instructions

```bash
npm install
npm run build
```
Then load the dist/ folder into Chrome at chrome://extensions using "Load unpacked."

## Notes
Uses manual multiple-entry Vite build to avoid plugin versioning issues.

Default extractor currently uses minimal scraping. Domain-specific extractors can be added easily.

## License

MIT

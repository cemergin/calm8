import type { EventData } from '@/types/EventData';

export function extractEvent(): EventData | null {
  const name =
    document.querySelector('h1')?.textContent?.trim() ||
    document.title ||
    'Untitled Event';

  const date = new Date().toISOString().split('T')[0]; // fallback: today

  const url = window.location.href;

  const description =
    document
      .querySelector('meta[name="description"]')
      ?.getAttribute('content') || '';

  const venue = '';

  return {
    name,
    date,
    url,
    description,
    venue,
  };
}

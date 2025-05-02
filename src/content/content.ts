import { extractEvent } from './extractors/default';
import { createCalendarButton } from './ui/calendarButton';

const eventData = extractEvent();

if (eventData) {
  createCalendarButton(eventData);
} else {
  console.log('No event data found.');
}

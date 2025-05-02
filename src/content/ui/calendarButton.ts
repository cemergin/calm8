import type { EventData } from '@/types/EventData';

export function createCalendarButton(event: EventData) {
  const existingButton = document.getElementById('eventseek-btn');
  if (existingButton) return; // Avoid injecting multiple times

  const button = document.createElement('button');
  button.id = 'eventseek-btn';
  button.innerText = 'Add to Calendar';
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.zIndex = '9999';
  button.style.padding = '10px 15px';
  button.style.backgroundColor = '#1a73e8';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.cursor = 'pointer';
  button.style.fontSize = '14px';

  button.onclick = () => {
    console.log('Event data:', event);
    // Later we'll open Google Calendar link here
  };

  document.body.appendChild(button);
}

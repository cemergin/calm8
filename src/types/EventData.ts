export interface UserInputData {
  userDescription?: string; // User-entered notes
  spotifyUrl?: string;
  youtubeUrl?: string;
  attending?: boolean; // User says they're attending
}
export interface EventData extends UserInputData {
  name: string; // Event name
  date: string; // YYYY-MM-DD
  time?: string; // HH:mm or HH:mm:ss
  venue?: string;
  url: string; // Event page URL
  description?: string; // Scraped event description
}

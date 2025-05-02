import { useForm } from '@tanstack/react-form';
import type { EventData } from '@/types/EventData';

function EventFormPage() {
  const form = useForm({
    defaultValues: {
      name: '',
      date: '',
      time: '',
      venue: '',
      url: '',
      description: '',
      userDescription: '',
      spotifyUrl: '',
      youtubeUrl: '',
      attending: false,
    } as EventData,
    onSubmit: ({ value }) => {
      console.log('Submitted data:', value);
    },
  });

  return (
    <div style={{ padding: '16px', fontFamily: 'Arial, sans-serif' }}>
      <h1>EventSeek</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <form.Field name="name">
          {(field) => (
            <label>
              Name:
              <input
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </label>
          )}
        </form.Field>
        <br />

        <form.Field name="date">
          {(field) => (
            <label>
              Date:
              <input
                type="date"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </label>
          )}
        </form.Field>
        <br />

        <form.Field name="time">
          {(field) => (
            <label>
              Time:
              <input
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </label>
          )}
        </form.Field>
        <br />

        <form.Field name="venue">
          {(field) => (
            <label>
              Venue:
              <input
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </label>
          )}
        </form.Field>
        <br />

        <form.Field name="url">
          {(field) => (
            <label>
              URL:
              <input
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </label>
          )}
        </form.Field>
        <br />

        <form.Field name="description">
          {(field) => (
            <label>
              Description:
              <textarea
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </label>
          )}
        </form.Field>
        <br />

        <form.Field name="userDescription">
          {(field) => (
            <label>
              User Description:
              <textarea
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </label>
          )}
        </form.Field>
        <br />

        <form.Field name="spotifyUrl">
          {(field) => (
            <label>
              Spotify URL:
              <input
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </label>
          )}
        </form.Field>
        <br />

        <form.Field name="youtubeUrl">
          {(field) => (
            <label>
              YouTube URL:
              <input
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </label>
          )}
        </form.Field>
        <br />

        <form.Field name="attending">
          {(field) => (
            <label>
              Attending:
              <input
                type="checkbox"
                checked={field.state.value}
                onChange={(e) => field.handleChange(e.target.checked)}
              />
            </label>
          )}
        </form.Field>
        <br />

        <button type="submit">Save Event</button>
      </form>
    </div>
  );
}

export default EventFormPage;

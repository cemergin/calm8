import { useForm } from '@tanstack/react-form';
import type { EventData } from '@/types/EventData';
import { Label, Checkbox } from 'radix-ui';

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
    <div
      style={{
        padding: '16px',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '320px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <h1>EventSeek</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
      >
        <form.Field name="name">
          {(field) => (
            <div>
              <Label.Root htmlFor="name">Name:</Label.Root>
              <input
                id="name"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
          )}
        </form.Field>

        <form.Field name="date">
          {(field) => (
            <div>
              <Label.Root htmlFor="date">Date:</Label.Root>
              <input
                id="date"
                type="date"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
          )}
        </form.Field>

        <form.Field name="time">
          {(field) => (
            <div>
              <Label.Root htmlFor="time">Time:</Label.Root>
              <input
                id="time"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
          )}
        </form.Field>

        <form.Field name="venue">
          {(field) => (
            <div>
              <Label.Root htmlFor="venue">Venue:</Label.Root>
              <input
                id="venue"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
          )}
        </form.Field>

        <form.Field name="url">
          {(field) => (
            <div>
              <Label.Root htmlFor="url">URL:</Label.Root>
              <input
                id="url"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
          )}
        </form.Field>

        <form.Field name="description">
          {(field) => (
            <div>
              <Label.Root htmlFor="description">Description:</Label.Root>
              <textarea
                id="description"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
          )}
        </form.Field>

        <form.Field name="userDescription">
          {(field) => (
            <div>
              <Label.Root htmlFor="userDescription">
                User Description:
              </Label.Root>
              <textarea
                id="userDescription"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
          )}
        </form.Field>

        <form.Field name="spotifyUrl">
          {(field) => (
            <div>
              <Label.Root htmlFor="spotifyUrl">Spotify URL:</Label.Root>
              <input
                id="spotifyUrl"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
          )}
        </form.Field>

        <form.Field name="youtubeUrl">
          {(field) => (
            <div>
              <Label.Root htmlFor="youtubeUrl">YouTube URL:</Label.Root>
              <input
                id="youtubeUrl"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
          )}
        </form.Field>

        <form.Field name="attending">
          {(field) => (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Checkbox.Root
                id="attending"
                checked={field.state.value}
                onCheckedChange={(checked) =>
                  field.handleChange(Boolean(checked))
                }
              >
                <Checkbox.Indicator>✔</Checkbox.Indicator>
              </Checkbox.Root>
              <Label.Root htmlFor="attending">Attending</Label.Root>
            </div>
          )}
        </form.Field>

        <button type="submit" style={{ marginTop: '12px' }}>
          Save Event
        </button>
      </form>
    </div>
  );
}

export default EventFormPage;

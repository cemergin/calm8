import { useForm } from '@tanstack/react-form';
import type { EventData } from '@/types/EventData';
import { Label, Checkbox } from 'radix-ui';
import { Button, Flex, Heading } from '@radix-ui/themes';

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

  const inputStyle = {
    width: '100%',
    border: '1px solid var(--gray-7)',
    borderRadius: '4px',
    padding: '8px',
    backgroundColor: 'var(--gray-1)',
    color: 'var(--gray-12)',
  };

  return (
    <Flex direction="column" gap="3" p="4" style={{ maxWidth: 320 }}>
      <Heading size="5">EventSeek</Heading>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <Flex direction="column" gap="3">
          <form.Field name="name">
            {(field) => (
              <div>
                <Label.Root htmlFor="name">Name</Label.Root>
                <input
                  id="name"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  style={inputStyle}
                />
              </div>
            )}
          </form.Field>

          <form.Field name="date">
            {(field) => (
              <div>
                <Label.Root htmlFor="date">Date</Label.Root>
                <input
                  id="date"
                  type="date"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  style={inputStyle}
                />
              </div>
            )}
          </form.Field>

          <form.Field name="time">
            {(field) => (
              <div>
                <Label.Root htmlFor="time">Time</Label.Root>
                <input
                  id="time"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  style={inputStyle}
                />
              </div>
            )}
          </form.Field>

          <form.Field name="venue">
            {(field) => (
              <div>
                <Label.Root htmlFor="venue">Venue</Label.Root>
                <input
                  id="venue"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  style={inputStyle}
                />
              </div>
            )}
          </form.Field>

          <form.Field name="url">
            {(field) => (
              <div>
                <Label.Root htmlFor="url">URL</Label.Root>
                <input
                  id="url"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  style={inputStyle}
                />
              </div>
            )}
          </form.Field>

          <form.Field name="description">
            {(field) => (
              <div>
                <Label.Root htmlFor="description">Description</Label.Root>
                <textarea
                  id="description"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  style={{ ...inputStyle, height: '60px' }}
                />
              </div>
            )}
          </form.Field>

          <form.Field name="userDescription">
            {(field) => (
              <div>
                <Label.Root htmlFor="userDescription">
                  User Description
                </Label.Root>
                <textarea
                  id="userDescription"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  style={{ ...inputStyle, height: '60px' }}
                />
              </div>
            )}
          </form.Field>

          <form.Field name="spotifyUrl">
            {(field) => (
              <div>
                <Label.Root htmlFor="spotifyUrl">Spotify URL</Label.Root>
                <input
                  id="spotifyUrl"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  style={inputStyle}
                />
              </div>
            )}
          </form.Field>

          <form.Field name="youtubeUrl">
            {(field) => (
              <div>
                <Label.Root htmlFor="youtubeUrl">YouTube URL</Label.Root>
                <input
                  id="youtubeUrl"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  style={inputStyle}
                />
              </div>
            )}
          </form.Field>

          <form.Field name="attending">
            {(field) => (
              <Flex align="center" gap="2">
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
              </Flex>
            )}
          </form.Field>

          <Button type="submit">Save Event</Button>
        </Flex>
      </form>
    </Flex>
  );
}

export default EventFormPage;

import { useForm } from '@tanstack/react-form';
import type { EventData } from '@/types/EventData';
import { Label, Checkbox } from 'radix-ui';
import { Button, TextField, TextArea, Flex, Heading } from '@radix-ui/themes';

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
              <TextField.Root>
                <Label.Root htmlFor="name">Name</Label.Root>
                <TextField.Input
                  id="name"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </TextField.Root>
            )}
          </form.Field>

          <form.Field name="date">
            {(field) => (
              <TextField.Root>
                <Label.Root htmlFor="date">Date</Label.Root>
                <TextField.Input
                  id="date"
                  type="date"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </TextField.Root>
            )}
          </form.Field>

          <form.Field name="time">
            {(field) => (
              <TextField.Root>
                <Label.Root htmlFor="time">Time</Label.Root>
                <TextField.Input
                  id="time"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </TextField.Root>
            )}
          </form.Field>

          <form.Field name="venue">
            {(field) => (
              <TextField.Root>
                <Label.Root htmlFor="venue">Venue</Label.Root>
                <TextField.Input
                  id="venue"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </TextField.Root>
            )}
          </form.Field>

          <form.Field name="url">
            {(field) => (
              <TextField.Root>
                <Label.Root htmlFor="url">URL</Label.Root>
                <TextField.Input
                  id="url"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </TextField.Root>
            )}
          </form.Field>

          <form.Field name="description">
            {(field) => (
              <div>
                <Label.Root htmlFor="description">Description</Label.Root>
                <TextArea
                  id="description"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
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
                <TextArea
                  id="userDescription"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          </form.Field>

          <form.Field name="spotifyUrl">
            {(field) => (
              <TextField.Root>
                <Label.Root htmlFor="spotifyUrl">Spotify URL</Label.Root>
                <TextField.Input
                  id="spotifyUrl"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </TextField.Root>
            )}
          </form.Field>

          <form.Field name="youtubeUrl">
            {(field) => (
              <TextField.Root>
                <Label.Root htmlFor="youtubeUrl">YouTube URL</Label.Root>
                <TextField.Input
                  id="youtubeUrl"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </TextField.Root>
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

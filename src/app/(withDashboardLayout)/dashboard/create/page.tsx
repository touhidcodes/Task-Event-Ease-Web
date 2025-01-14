"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";
import { eventPostValidationSchema } from "@/constants/schema";
import { useCreateEventMutation } from "@/redux/api/eventAPI";

const PostEventPage = () => {
  const [postEvent] = useCreateEventMutation();
  //  create post
  const handlePost = async (values: FieldValues) => {
    const eventData = {
      name: values.name,
      date: values.date,
      location: values.location,
      maxAttendees: Number(values.maxAttendees),
    };

    try {
      const res = await postEvent(eventData);

      if (res?.data?.id) {
        toast.success("Event Created successfully!");
      } else {
        toast.error("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box sx={{ p: 3, background: "#EBF0F4" }}>
      <Container>
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
            spacing={2}
          >
            <Typography
              variant="h3"
              fontWeight={600}
              style={{ color: "#0B1134CC", marginTop: "20px" }}
            >
              Create your event
            </Typography>
            <Typography
              component="p"
              fontWeight={400}
              style={{ color: "#0B1134CC" }}
            >
              Please provide your event information
            </Typography>
          </Stack>

          <Box m={5}>
            <PHForm
              onSubmit={handlePost}
              resolver={zodResolver(eventPostValidationSchema)}
              defaultValues={{
                name: "",
                date: "",
                location: "",
                maxAttendees: 0,
              }}
            >
              <Stack spacing={4} my={1} marginBottom={5}>
                <PHInput
                  name="name"
                  label="Name of event"
                  type="text"
                  fullWidth={true}
                />
                <PHInput
                  name="date"
                  label="Event Date"
                  type="text"
                  fullWidth={true}
                />
                <PHInput
                  name="location"
                  label="Location"
                  type="text"
                  fullWidth={true}
                />
                <PHInput
                  name="maxAttendees"
                  label="Max Attendees"
                  type="number"
                  fullWidth={true}
                />
              </Stack>

              <Button
                sx={{
                  backgroundColor: "#0B1134",
                  color: "white",
                  padding: "10px",
                  "&:hover": {
                    backgroundColor: "#061022",
                  },
                }}
                fullWidth={true}
                type="submit"
              >
                Submit
              </Button>
            </PHForm>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default PostEventPage;

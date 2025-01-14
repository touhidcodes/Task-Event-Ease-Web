"use client";

import { Container, Typography } from "@mui/material";
import EventCardTable from "@/components/Card/EventCardTable/EventCardTable";
import { toast } from "sonner";
import Loading from "@/components/UI/Loading/Loading";
import { useGetAllEventsQuery } from "@/redux/api/eventAPI";
import { useBookingRequestMutation } from "@/redux/api/attendeeApi";

const EventsPage = () => {
  const { data: events, isLoading } = useGetAllEventsQuery({});
  const [bookingRequest] = useBookingRequestMutation();

  const handleBooking = async (id: string) => {
    const eventId = { eventId: id };
    try {
      const res = await bookingRequest(eventId);

      if (res?.data?.id) {
        toast.success("event booked successfully!");
      }
    } catch (err) {
      toast.success("You have already booked this event!");
      console.log(err);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container sx={{ paddingBottom: "50px" }}>
      <Typography variant="h4" component="h1" gutterBottom my={3}>
        All Posts
      </Typography>
      <EventCardTable events={events} handleBooking={handleBooking} />
    </Container>
  );
};

export default EventsPage;

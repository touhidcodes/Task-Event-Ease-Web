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
      console.log(res);
      if (res?.data?.id) {
        toast.success("Event booked successfully!");
      }
      if (!res?.data) {
        toast.success("Event already booked !");
      }
    } catch (err) {
      toast.success("something went wrong!");
      console.log(err);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container sx={{ paddingBottom: "50px" }}>
      <Typography variant="h4" component="h1" gutterBottom my={3}>
        All Events
      </Typography>
      <EventCardTable events={events} handleBooking={handleBooking} />
    </Container>
  );
};

export default EventsPage;

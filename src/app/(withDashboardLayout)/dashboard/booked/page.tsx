"use client";

import { Container, Typography } from "@mui/material";
import EventCardTable from "@/components/Card/EventCardTable/EventCardTable";
import Loading from "@/components/UI/Loading/Loading";
import { useGetMyBookingsQuery } from "@/redux/api/attendeeApi";
import BookingCardTable from "@/components/Card/BookingCardTable/BookingCardTable";

const MyEventsPage = () => {
  const { data: bookings, isLoading } = useGetMyBookingsQuery({});

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container sx={{ paddingBottom: "50px" }}>
      <Typography variant="h4" component="h1" gutterBottom my={3}>
        All Posts
      </Typography>
      <BookingCardTable bookings={bookings} />
    </Container>
  );
};

export default MyEventsPage;

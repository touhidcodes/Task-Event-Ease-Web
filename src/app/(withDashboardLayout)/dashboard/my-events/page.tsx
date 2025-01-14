"use client";

import { Container, Typography } from "@mui/material";
import EventCardTable from "@/components/Card/EventCardTable/EventCardTable";
import Loading from "@/components/UI/Loading/Loading";
import { useGetMyEventsQuery } from "@/redux/api/eventAPI";

const MyEventsPage = () => {
  const { data: events, isLoading } = useGetMyEventsQuery({});

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container sx={{ paddingBottom: "50px" }}>
      <Typography variant="h4" component="h1" gutterBottom my={3}>
        All Posts
      </Typography>
      <EventCardTable events={events} />
    </Container>
  );
};

export default MyEventsPage;

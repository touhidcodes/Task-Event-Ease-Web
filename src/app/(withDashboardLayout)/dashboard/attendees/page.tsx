"use client";

import { Container, Typography } from "@mui/material";
import Loading from "@/components/UI/Loading/Loading";
import {
  useGetAllAttendeesQuery,
  useGetMyBookingsQuery,
} from "@/redux/api/attendeeApi";
import AttendeesCardTable from "@/components/Card/AttendeesCardTable/AttendeesCardTable";

const MyEventsPage = () => {
  const { data: attendees, isLoading } = useGetAllAttendeesQuery({});

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container sx={{ paddingBottom: "50px" }}>
      <Typography variant="h4" component="h1" gutterBottom my={3}>
        All Posts
      </Typography>
      <AttendeesCardTable attendees={attendees} />
    </Container>
  );
};

export default MyEventsPage;

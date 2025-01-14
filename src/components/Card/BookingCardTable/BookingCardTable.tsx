import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Button } from "@mui/material";
import { TEvent } from "@/types/Events";
import { TEventBookings } from "@/types/Bookings";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1F2544",
    color: "#fff",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

type TEventCardProps = {
  bookings: TEventBookings[];
};

const BookingCardTable = ({ bookings }: TEventCardProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Location</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Attendees</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map((booking: TEventBookings) => (
            <StyledTableRow key={booking.id}>
              <StyledTableCell align="right">
                {booking?.event?.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                {booking?.event?.location}
              </StyledTableCell>
              <StyledTableCell align="right">
                {booking?.event?.date}
              </StyledTableCell>
              <StyledTableCell align="right">
                {booking?.event?.maxAttendees}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookingCardTable;

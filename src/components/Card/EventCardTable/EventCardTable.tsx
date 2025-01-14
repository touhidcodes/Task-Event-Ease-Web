import React from "react";
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
  events: TEvent[];
  handleBooking?: (eventId: string) => void;
};

const eventCardTable = ({ events, handleBooking }: TEventCardProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Location</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Attendees</StyledTableCell>
            {handleBooking && (
              <StyledTableCell align="center">Action</StyledTableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event: TEvent) => (
            <StyledTableRow key={event.id}>
              <StyledTableCell align="right">{event?.name}</StyledTableCell>
              <StyledTableCell align="right">{event?.location}</StyledTableCell>
              <StyledTableCell align="right">{event.date}</StyledTableCell>
              <StyledTableCell align="right">
                {event.maxAttendees}
              </StyledTableCell>
              {handleBooking && (
                <StyledTableCell align="right">
                  <Button onClick={() => handleBooking(event.id)}>Book</Button>
                </StyledTableCell>
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default eventCardTable;

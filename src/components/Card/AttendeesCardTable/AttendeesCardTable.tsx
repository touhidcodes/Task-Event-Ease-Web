import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TEventAttendees } from "@/types/Attendees";

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

type TAttendeesCardProps = {
  attendees: TEventAttendees[];
};

const AttendeesCardTable = ({ attendees }: TAttendeesCardProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Username</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Location</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {attendees.map((attendee: TEventAttendees) => (
            <StyledTableRow key={attendee.id}>
              <StyledTableCell align="right">
                {attendee?.user?.username}
              </StyledTableCell>
              <StyledTableCell align="right">
                {attendee?.user?.email}
              </StyledTableCell>
              <StyledTableCell align="right">
                {attendee?.event?.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                {attendee?.event?.location}
              </StyledTableCell>
              <StyledTableCell align="right">
                {attendee?.event?.date}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AttendeesCardTable;

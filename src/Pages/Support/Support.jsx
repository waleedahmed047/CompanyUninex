import React, { useState, useEffect } from "react";
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import NewTicketModal from "../../Components/Modals/NewTicketModal/NewTicketModal"; 
import "./Support.css";

const SupportTickets = () => {
  const [openModal, setOpenModal] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    fetch("/Api/tickets.json") // Ensure the path is correct
      .then((response) => response.json())
      .then((data) => setTickets(data))
      .catch((error) => console.error("Error fetching tickets:", error));
  }, []);

  const filteredTickets = tickets.filter((ticket) =>
    ticket.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="support-container">
      <div className="support-card">
        <div className="support-header">
          <Typography className="support-title">Support Ticket</Typography>
          <Typography className="support-subTitle">
            Please feel free to open a ticket if you are facing any issue
          </Typography>
        </div>
        <Button variant="contained" className="new-ticket-btn" onClick={() => setOpenModal(true)}>
          New Ticket
        </Button>
      </div>

      <div className="history-card">
        <div className="history-card-header">
          <div className="history-card-header-left">
            <Typography className="support-title">Latest Support History</Typography>
            <Typography className="support-subTitle">Here is your most recent history</Typography>
          </div>
          <TextField
            variant="outlined"
            placeholder="Search"
            size="small"
            className="search-box"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <TableContainer className="support-table">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="approve-table-color">Ticket No</TableCell>
                <TableCell className="approve-table-color">Subject</TableCell>
                <TableCell className="approve-table-color">Description</TableCell>
                <TableCell className="approve-table-color">Date</TableCell>
                <TableCell className="approve-table-color">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTickets.map((ticket, index) => (
                <TableRow 
                  key={index} 
                  className="clickable-row " 
                  onClick={() => navigate(`/support/ticket/${ticket.ticketNo}`)}
                >
                  <TableCell className="approve-table-color">{ticket.ticketNo}</TableCell>
                  <TableCell className="approve-table-color">{ticket.subject}</TableCell>
                  <TableCell className="approve-table-color">{ticket.description}</TableCell>
                  <TableCell className="approve-table-color">{ticket.date}</TableCell>
                  <TableCell>
                    <span className="approve-status">{ticket.status}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <NewTicketModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default SupportTickets;

import React, { useState, useEffect } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Button, Avatar, Typography
} from "@mui/material";
import ContractorModal from "../../Components/Modals/ContractorModal/ContractorModal";
import './Contract.css';
export default function Contract() {
  const [contractors, setContractors] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedContractor, setSelectedContractor] = useState(null);

  // Fetch Data
  useEffect(() => {
    fetch("Api/contractors.json")
      .then((res) => res.json())
      .then((data) => setContractors(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const handleOpen = (contractor) => {
    setSelectedContractor(contractor);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedContractor(null);
  };

  return (
    <TableContainer className="table-container">
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: "#00CEF30D" }}>
            <TableCell className="contracts-header"><b>Contractor Profile</b></TableCell>
            <TableCell className="contracts-header"><b>Contract Name</b></TableCell>
            <TableCell className="contracts-header"><b>Contract Duration</b></TableCell>
            <TableCell className="contracts-header"><b>Amount</b></TableCell>
            <TableCell className="contracts-header"><b>Status</b></TableCell>
            <TableCell className="contracts-header"><b>Action</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contractors.map((contractor) => (
            <TableRow key={contractor.id}>
              <TableCell>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Avatar src={contractor.image} alt={contractor.name} />
                  <div>
                    <Typography className="contract-table-data" variant="body1"><b>{contractor.name}</b></Typography>
                    <Typography className="contract-table-data" variant="body2" color="textSecondary">{contractor.role}</Typography>
                  </div>
                </div>
              </TableCell>
              <TableCell className="contract-table-data">{contractor.contractTitle}</TableCell>
              <TableCell className="contract-table-data">{contractor.duration}</TableCell>
              <TableCell className="contract-table-data">{contractor.amount}</TableCell>
              <TableCell style={{ color: "green" }}>{contractor.status}</TableCell>
              <TableCell>
                <Button className="contract-detail-button" variant="outlined" size="small" onClick={() => handleOpen(contractor)}>
                  Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modal */}
      <ContractorModal open={open} handleClose={handleClose} contractor={selectedContractor} />
    </TableContainer>
  );
}

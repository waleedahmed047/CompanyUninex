import React, { useState, useEffect } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Button, Avatar, Typography
} from "@mui/material";
import './Transection.css';

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  // Fetch Data
  useEffect(() => {
    fetch("/Api/transactions.json")
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <TableContainer className="table-container">
      <Table>
        <TableHead>
          <TableRow className="transactions-header-top">
            <TableCell className="transactions-header"><b>Contractor Profile</b></TableCell>
            <TableCell className="transactions-header"><b>Contract Name</b></TableCell>
            <TableCell className="transactions-header"><b>Transaction Date</b></TableCell>
            <TableCell className="transactions-header"><b>Invoice ID</b></TableCell>
            <TableCell className="transactions-header"><b>Amount</b></TableCell>
            <TableCell className="transactions-header"><b>Status</b></TableCell>
            <TableCell className="transactions-header"><b>Action</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Avatar src={transaction.image} alt={transaction.contractorName} />
                  <div>
                    <Typography className="contract-table-data" variant="body1"><b>{transaction.contractorName}</b></Typography>
                    <Typography className="contract-table-data" variant="body2" color="textSecondary">{transaction.role}</Typography>
                  </div>
                </div>
              </TableCell>
              <TableCell className="contract-table-data">{transaction.contractName}</TableCell>
              <TableCell className="contract-table-data">{transaction.transactionDate}</TableCell>
              <TableCell className="contract-table-data">{transaction.invoiceID}</TableCell>
              <TableCell className="contract-table-data">{transaction.amount}</TableCell>
              <TableCell style={{ color: transaction.status === "Received" ? "#32BF74" : "#FC8721" }}>
                {transaction.status}
              </TableCell>
              <TableCell>
                <Button className="transaction-detail-button" variant="outlined" size="small">
                  Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

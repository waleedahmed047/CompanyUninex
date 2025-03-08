import React from "react";
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Avatar, Typography, Button, Box, Grid, Paper
} from "@mui/material";
import './ContractorModal.css';
import ContratImage from '../../../assets/contractModal/handShake.svg';

const ContractorModal = ({ open, handleClose, contractor }) => {
  if (!contractor) return null;

  return (
    <Dialog open={open} onClose={handleClose}  >
      <DialogContent sx={{ p: 4, textAlign: "center" }} style={{overflow:'auto', scrollbarWidth:'none'}}>
        <Box className="contractor-modal">
          <h3>Contractor</h3>
          <div className="contractor-header-content" >
            <Avatar src={contractor.image} sx={{ width: 50, height: 50, mb: 1 }} />
            <div className="contractor-info">
              <h2 >{contractor.name}</h2>
              <p >{contractor.role}</p>
            </div>
          </div>

        </Box>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={4} className="contract-info-bottom">
            <h3 variant="body2" fontWeight="bold">Contract Type</h3>
            <div className="contract-info-instruction">
              <img src={ContratImage} />
              <p color="green">{contractor.contractType}</p>
            </div>
          </Grid>
          <Grid item xs={4} className="contract-info-bottom">
            <h3 variant="body2" fontWeight="bold">Contract Duration</h3>
            <div className="contract-info-instruction">
              <img src={ContratImage} />
              <p color="purple">{contractor.duration}</p>
            </div>
          </Grid>
          <Grid item xs={4} className="contract-info-bottom">
            <h3 variant="body2" fontWeight="bold">Contract Amount</h3>
            <div className="contract-info-instruction">
              <img src={ContratImage} />
              <p color="gold">{contractor.amount}</p>
            </div>
          </Grid>
        </Grid>

        {/* Contract Description */}
        <Paper sx={{ mt: 4, p: 2, border: "2px dashed #aaa", boxShadow: 'none' }}>
          <div className="contract-description-all">
          <p className="contract-description-title" >Contract Title: </p>
          <p>{contractor.contractTitle}</p>
          </div>
          
          <p className="contract-description-title">Contract Description:</p>
          <ul style={{ textAlign: "left" }}>
            {contractor.features.map((feature, index) => (
              <li style={{fontSize:'14px', marginTop:'5px'}} key={index}>{feature}</li>
            ))}
          </ul>
        </Paper>

        <Paper sx={{ mt: 3, p: 2, border: "2px dashed orange", textAlign: "left", boxShadow: 'none' }}>
          <p style={{fontSize:'14px'}} >• You can cancel the contract within seven days of making the contract and get your money back.</p>
          <p style={{fontSize:'14px'}}>• You cannot cancel the contract after seven days.</p>
        </Paper>
      </DialogContent>

      {/* Buttons */}
      <DialogActions sx={{ display: "flex", gap:3, justifyContent:'center', alignItems:'center', p: 2 }}>
        <Button variant="outlined" color="warning">Cancel this contract</Button>
        <Button variant="contained" color="info" onClick={handleClose}>Back</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContractorModal;

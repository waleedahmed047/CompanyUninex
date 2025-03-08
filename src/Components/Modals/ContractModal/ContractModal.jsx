import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  TextField,
  IconButton,
} from "@mui/material";
import { Delete, AttachFile } from "@mui/icons-material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./ContractModal.css";
import PayPalImg from "../../../assets/Chat/paypal.svg";
import WiseImg from "../../../assets/Chat/wise.svg";
import StripeImg from "../../../assets/Chat/stripe.svg";
import VisaImg from "../../../assets/Chat/visa.svg";
import DebitImg from "../../../assets/Chat/debit.svg";

const ContractModal = ({ open, handleClose }) => {
  const [step, setStep] = useState(1); // Step control (1 = Contract, 2 = Payment)
  const [contractType, setContractType] = useState("Full Time");
  const [duration, setDuration] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [file, setFile] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [amount, setAmount] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="contract-modal">
      <Box className="modal-container">
        {step === 1 ? (
          <>
            <Typography className="contract-modal-title">
              New Contract
            </Typography>

            <div className="contrat-modal-detail">
              <h2 style={{ color: "#00CEF3" }}>Monthly</h2>
              <RadioGroup
                value={contractType}
                onChange={(e) => setContractType(e.target.value)}
                row
                className="radio-group"
              >
                <FormControlLabel
                  value="Full Time"
                  control={<Radio size="small" />}
                  label="Full Time"
                />
                <FormControlLabel
                  value="Part Time"
                  control={<Radio size="small" />}
                  label="Part Time"
                />
              </RadioGroup>

              <h2 className="contract-duration">Contract Duration</h2>
              <Select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                displayEmpty
                className="dropdown"
                size="small"
              >
                <MenuItem value="" disabled>
                  Select Contract Duration
                </MenuItem>
                <MenuItem value="1 Month">1 Month</MenuItem>
                <MenuItem value="6 Months">6 Months</MenuItem>
                <MenuItem value="1 Year">1 Year</MenuItem>
              </Select>

              <h2 className="contract-duration">Contract Title</h2>
              <TextField
                size="small"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                className="input-field"
              />

              <h2 className="contract-duration">Contract Description</h2>
              <ReactQuill
                value={description}
                onChange={setDescription}
                className="quill-editor"
              />

              {/* File Upload */}
              <div className="file-upload">
                <input
                  type="file"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  id="file-input"
                />
                <label htmlFor="file-input">
                  <Button
                    component="span"
                    className="attach-file-button"
                    startIcon={<AttachFile />}
                  >
                    Attach File
                  </Button>
                </label>
                {file && (
                  <div className="file-info">
                    <Typography className="file-info-data">
                      {file.name}
                    </Typography>
                    <IconButton onClick={removeFile}>
                      <Delete color="red" />
                    </IconButton>
                  </div>
                )}
              </div>

              <h2 className="contract-duration">Salary</h2>
              <TextField
                size="small"
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                fullWidth
                className="input-field"
              />
            </div>
            {/* Buttons */}
            <div className="button-group">
              <Button
                className="cancel-button"
                variant="outlined"
                onClick={handleClose}
                size="small"
              >
                Cancel
              </Button>
              <Button
                className="proceed-button"
                variant="contained"
                onClick={() => setStep(2)}
                size="small"
              >
                Proceed
              </Button>
            </div>
          </>
        ) : (
          <>
            <Typography className="contract-modal-title">Payment</Typography>
            <div className="contract-modal-payment-step">
              <h2 className="label">Payment Amount</h2>
              <TextField
                size="small"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                fullWidth
                className="input-field"
              />

              <h2 className="label">Select Payment Method</h2>
              <div className="payment-methods">
                {[PayPalImg, WiseImg, StripeImg, VisaImg, DebitImg].map(
                  (method) => (
                    <Button
                      key={method}
                      variant={
                        paymentMethod === method ? "contained" : "outlined"
                      }
                      onClick={() => setPaymentMethod(method)}
                      className={
                        paymentMethod === method ? "contained-button" : ""
                      }
                    >
                      <img src={method} />
                    </Button>
                  )
                )}
              </div>

              <h2 className="label">Name on card</h2>

              <TextField
                size="small"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                fullWidth
                className="input-field"
              />
              <h2 className="label">Card number</h2>

              <div className="card-number-details">
                <TextField
                  size="small"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  fullWidth
                  placeholder="123  32165  321685"
                  className="input-field"
                />
                <TextField
                  size="small"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  placeholder="10/25"
                  className="input-field"
                />
                <TextField
                  size="small"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="000"
                  className="input-field"
                />
              </div>
            </div>
            {/* Buttons */}
            <div className="button-group">
              <Button
                className="cancel-button"
                variant="outlined"
                onClick={() => setStep(1)}
              >
                Back
              </Button>
              <Button
                className="proceed-button"
                variant="contained"
                onClick={handleClose}
              >
                Confirm Payment
              </Button>
            </div>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default ContractModal;

import React, { useState } from "react";
import { Modal, Box, Typography, Button, TextField, IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import "./NewTicketModal.css";

const NewTicketModal = ({ open, onClose }) => {
  const [ticketNo] = useState(Math.floor(1000 + Math.random() * 9000));
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleRemoveFile = (index) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="modal-box">
        <Typography  className="modal-title">New Support Ticket</Typography>
        <Typography className="modal-subTitle">Fill up all the information here, then click submit button</Typography>
        
        <Typography className="ticket-number">Ticket No <span>{ticketNo}</span></Typography>

        <TextField
          label="Title"
          placeholder="Add Title"
          fullWidth
          className="modal-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          size="small"
        />

        <TextField
          label="Description"
          placeholder="Write your description"
          multiline
          size="small"
          rows={4}
          fullWidth
          className="modal-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="file-upload">
          <input
            type="file"
            multiple
            id="fileInput"
            hidden
            onChange={handleFileSelect}
          />
          <label htmlFor="fileInput">
            <Button className="ticket-upload-button"  component="span" startIcon={<AttachFileIcon />}>
              Add attachment
            </Button>
          </label>
        </div>

        {selectedFiles.length > 0 && (
          <div className="file-preview">
            {selectedFiles.map((file, index) => (
              <div key={index} className="file-item">
                <Typography variant="body2">{file.name}</Typography>
                <IconButton onClick={() => handleRemoveFile(index)}>
                  <CloseIcon />
                </IconButton>
              </div>
            ))}
          </div>
        )}

        {/* Submit Button */}
        <Button variant="contained" className="submit-btn">Submit</Button>
      </Box>
    </Modal>
  );
};

export default NewTicketModal;

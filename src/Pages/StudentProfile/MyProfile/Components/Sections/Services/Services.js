import React, { useState } from "react";
import {
  IconButton,
  Modal,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import "./Services.css";

const Services = () => {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState([
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Cloud Computing",
    "API Integration",
  ]);

  const [editedServices, setEditedServices] = useState(services.join("\n"));

  const handleOpen = () => {
    setEditedServices(services.join("\n"));
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSave = () => {
    setServices(
      editedServices.split("\n").filter((service) => service.trim() !== "")
    );
    handleClose();
  };

  const handleTextChange = (e) => setEditedServices(e.target.value);

  return (
    <Box className="services-container" >
      <div elevation={3} className="services-paper">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" component="h2">
            Services
          </Typography>
          <IconButton onClick={handleOpen}>
            <EditIcon />
          </IconButton>
        </Box>

        <List>
          {services.map((service, index) => (
            <ListItem key={index} divider>
              <ListItemText primary={service} />
            </ListItem>
          ))}
        </List>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box className="modal-box">
          <Typography variant="h6" component="h3" mb={2}>
            Edit Services
          </Typography>
          <TextField
            multiline
            fullWidth
            rows={8}
            variant="outlined"
            value={editedServices}
            onChange={handleTextChange}
            helperText="Enter each service on a new line"
          />
          <Box mt={2} display="flex" justifyContent="flex-end" gap={2}>
            <Button onClick={handleClose} variant="outlined" color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSave} variant="contained" color="primary">
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Services;

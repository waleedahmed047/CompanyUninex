import React from "react";
import { Modal, Box, Typography, IconButton, Avatar, Divider, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./ApplicationModal.css";

const ApplicationModal = ({ isOpen, onClose, person }) => {
    return (
        <Modal open={isOpen} onClose={onClose} aria-labelledby="application-modal-title">
            <Box className="application-modal-box">
                {/* Header */}
                <Box className="application-header">
                    <Typography id="application-modal-title" variant="h6" fontWeight="bold">
                        {person.name}'s Application
                    </Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Profile Section */}
                <Box className="application-profile">
                    <Avatar src={person.profile} alt={person.name} className="application-avatar" />
                    <Box>
                        <Typography fontWeight="bold">{person.name}</Typography>
                        <Typography color="text.secondary">{person.role} - {person.location}</Typography>
                        <Typography  color="text.secondary" variant="body2" mt={1}>
                            {person.detail || "No additional details provided."}
                        </Typography>
                    </Box>
                </Box>

                <Divider className="application-divider" />

                <Box className="application-contact">
                    <div className="application-contract-sections" >
                        <Typography className="application-view-title">Phone Number:</Typography>
                        <Typography className="application-contract-detail" color="text.secondary">{person.phone || "Not provided"}</Typography>
                    </div>
                    <div className="application-contract-sections" >
                        <Typography className="application-view-title" mt={1}>Email:</Typography>
                        <Typography className="application-contract-detail" color="text.secondary">{person.email || "Not provided"}</Typography>
                    </div>
                </Box>

                <Divider className="application-divider" />

                {/* Resume Section */}
                <Box className="application-resume">
                    <Typography className="application-view-title">Resume:</Typography>
                    {person.resume ? (
                        <Button variant="contained" className="resume-download" href={person.resume} download>
                            Download {person.resume.split("/").pop()}
                        </Button>
                    ) : (
                        <Typography color="text.secondary">No resume uploaded.</Typography>
                    )}
                </Box>

                <Divider className="application-divider" />

                {/* Additional Questions */}
                <Box className="application-info">
                    <Typography className="application-view-title">Age:</Typography>
                    <Typography color="text.secondary">{person.age || "Not provided"}</Typography>

                    <Typography className="application-view-title" mt={1}>Expected Salary:</Typography>
                    <Typography color="text.secondary">{person.salary ? `$${person.salary} USD` : "Not provided"}</Typography>
                </Box>

                <Divider className="application-divider" />

                {/* Action Buttons */}
                <Box className="application-buttons">
                    <Button className="application-review-message-button" >Message</Button>
                    <Button className="application-review-follow-button">Follow</Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default ApplicationModal;

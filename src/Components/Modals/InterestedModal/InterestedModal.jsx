import React, { useState } from "react";
import { Modal, Box, Typography, IconButton, Avatar, Divider, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ApplicationModal from "../../../Components/Modals/ApplicationModal/ApplicationModal";
import "./InterestedModal.css";
import ArrowIcon from '../../../assets/StudentProfile/arrow.svg';

const InterestedModal = ({ isOpen, onClose, people }) => {
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [isApplicationOpen, setIsApplicationOpen] = useState(false);

    const handleViewApplication = (person) => {
        setSelectedPerson(person);
        setIsApplicationOpen(true);
        onClose(); // Close Interested Modal
    };

    return (
        <>
            {/* Interested People Modal */}
            <Modal
                open={isOpen}
                onClose={onClose}
                aria-labelledby="modal-title"
                BackdropProps={{
                    style: {
                        backgroundColor: 'rgba(0, 0, 0, 0.13)',
                        backdropFilter: 'blur(1px)',
                    },
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        p: 3,
                        borderRadius: 2,
                    }}
                >
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Typography id="modal-title" variant="h6" fontWeight="bold">
                            Interested <span className="total-intrested-persons">{people.length}</span>
                        </Typography>
                        <IconButton onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Divider />
                    {people.map((person, index) => (
                        <Box key={person.id}>
                            <Box display="flex" alignItems="center" gap={2} p={1}>
                                <Avatar src={person.profile} alt={person.name} />
                                <Box>
                                    <Typography fontWeight="bold">{person.name}</Typography>
                                    <Typography color="text.secondary">{person.role} - {person.location}</Typography>
                                </Box>
                            </Box>
                            <button 
                                className="intrested-person-view-application" 
                                onClick={() => handleViewApplication(person)}
                            >
                                View Application <img src={ArrowIcon} alt="ArrowIcon" />
                            </button>
                            {index !== people.length - 1 && <Divider />}
                        </Box>
                    ))}
                    <Button variant="contained" className="intrested-people-view-more">View More</Button>
                </Box>
            </Modal>

            {/* Application Modal */}
            {selectedPerson && (
                <ApplicationModal 
                    isOpen={isApplicationOpen} 
                    onClose={() => setIsApplicationOpen(false)} 
                    person={selectedPerson} 
                />
            )}
        </>
    );
};

export default InterestedModal;

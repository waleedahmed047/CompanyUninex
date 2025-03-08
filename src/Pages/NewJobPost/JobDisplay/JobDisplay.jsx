import React from "react";
import { Box, Typography, Chip, Button, Divider } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import WorkIcon from "@mui/icons-material/Work";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./JobDisplay.css";
import { useLocation } from "react-router-dom";

const JobDetails = () => {
    const location = useLocation();
    const { formData } = location.state || {};

    if (!formData) {
        return <h2>No job details available</h2>;
    }
    return (
        <Box className="job-container">
            {/* Job Header */}
            <Box className="job-header">
                <WorkIcon className="icon" />
                <Box>
                    <Typography className="job-title">{formData.jobTitle}</Typography>
                    <Typography className="company-name">Tech Solution</Typography>
                </Box>
                <Chip label={formData.isUrgent}  className="urgent-badge" />
                <Typography variant="body2" className="views">Total views - 850</Typography>
                <Button variant="contained" startIcon={<EditIcon />} className="edit-button">
                    Edit
                </Button>
            </Box>

            {/* Job Info */}
            <Box className="job-info">
                <Chip className="job-info-chip" icon={<AccessTimeIcon />} label={formData.jobType} />
                <Chip className="job-info-chip" icon={<AccessTimeIcon />} label={formData.experience} />
                <Chip className="job-info-chip" icon={<LocationOnIcon />} label={formData.jobLocation} />
                <Chip className="job-info-chip" icon={<MonetizationOnIcon />} label={formData.salary} />
                <Chip className="job-info-chip" icon={<FavoriteIcon />} label="150 Interest" />
                <Typography variant="body2" className="date">{formData.applyLastDate}</Typography>
            </Box>

            <Divider className="divider" />

            {/* Company Introduction */}
            <Typography className="company-instructions">Company Introduction</Typography>
            <Typography variant="body2" className="description">
                {formData.jobDescription}
            </Typography>


            {/* Skills & Qualifications */}
            <Typography  className="company-instructions">Skills And Qualifications</Typography>
            <ul>
                {formData.additionalQuestions.map((q, index) => (
                    <li className="ullio" key={index}><strong>{q.question}</strong>: {q.answer}</li>
                ))}
            </ul>
        </Box>
    );
};

export default JobDetails;

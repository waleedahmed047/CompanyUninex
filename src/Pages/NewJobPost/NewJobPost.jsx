import React, { useState } from "react";
import {
    TextField,
    MenuItem,
    FormControl,
    Select,
    InputLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
    Divider,
    Modal,
    Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./NewJobPost.css";

const NewJobPost = () => {
    const [formData, setFormData] = useState({
        jobTitle: "Frontend Developer",
        jobType: "Full time",
        experience: "2 Year",
        jobLocation: "Remote",
        salary: "1000$ / Month",
        applyLastDate: "2025-12-12",
        jobDescription: "",
        isUrgent: "Yes",
        additionalQuestions: [
            { question: "What is your age?", answer: "27" },
            { question: "Expected Salary", answer: "500$" }
        ],
    });

    const [openModal, setOpenModal] = useState(false);
    const [newQuestion, setNewQuestion] = useState({ question: "", answer: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const handleAddQuestion = () => {
        if (newQuestion.question.trim() !== "" && newQuestion.answer.trim() !== "") {
            setFormData((prev) => ({
                ...prev,
                additionalQuestions: [...prev.additionalQuestions, newQuestion],
            }));
            setNewQuestion({ question: "", answer: "" });
            handleCloseModal();
        }
    };

    return (
        <div className="form-container">
            <h2>Job Application Form</h2> 
            <Divider className="divider-jobpost" />

            <div style={{ padding: "10px 20px" }}>
                <div className="form-group">
                    <TextField size="small" fullWidth label="Job Title" value={formData.jobTitle}  />
                </div>

                <div className="row">
                    <FormControl fullWidth size="small">
                        <InputLabel>Job Type</InputLabel>
                        <Select name="jobType" value={formData.jobType} onChange={handleChange} size="small">
                            <MenuItem value="Full time">Full time</MenuItem>
                            <MenuItem value="Part time">Part time</MenuItem>
                            <MenuItem value="Contract">Contract</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField size="small" fullWidth label="Experience" name="experience" value={formData.experience} onChange={handleChange} />
                </div>

                <div className="row">
                    <FormControl size="small" fullWidth>
                        <InputLabel>Job Location</InputLabel>
                        <Select name="jobLocation" value={formData.jobLocation} onChange={handleChange}>
                            <MenuItem value="Remote">Remote</MenuItem>
                            <MenuItem value="On-site">On-site</MenuItem>
                            <MenuItem value="Hybrid">Hybrid</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField size="small" fullWidth label="Salary" name="salary" value={formData.salary} onChange={handleChange} />
                </div>

                <div className="row">
                    <TextField size="small" fullWidth type="date" name="applyLastDate" value={formData.applyLastDate} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <FormControl component="fieldset">
                        <p>Is this job urgent?</p>
                        <RadioGroup row name="isUrgent" value={formData.isUrgent} onChange={handleChange}>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className="form-group">
                    <TextField size="small" fullWidth multiline rows={4} label="Job Description" name="jobDescription" value={formData.jobDescription} onChange={handleChange} />
                </div>
            </div>

            <h3>Add Additional Questions</h3>
            <Divider className="divider-jobpost" />
            <div style={{ padding: "10px 20px" }}>
                {formData.additionalQuestions.map((q, index) => (
                    <div className="form-group" key={index}>
                        <TextField size="small" fullWidth label={q.question} value={q.answer}  />
                    </div>
                ))}

                <div className="form-group">
                    <Button variant="outlined" className="add-button" onClick={handleOpenModal}>
                        Add More +
                    </Button>
                </div>

                <Button variant="contained" className="post-button" onClick={() => navigate("/job-details", { state: { formData } })}>
                    Post
                </Button>
            </div>

            {/* Modal for adding questions */}
            <Modal open={openModal} onClose={handleCloseModal}>
                <Box className="modal-box">
                    <h3>Add a New Question</h3>
                    <TextField size="small" fullWidth label="Question" value={newQuestion.question} onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })} />
                    <TextField size="small" fullWidth label="Expected Answer" value={newQuestion.answer} onChange={(e) => setNewQuestion({ ...newQuestion, answer: e.target.value })} />
                    <Button variant="contained" onClick={handleAddQuestion} style={{ marginTop: "10px" }} className="add-question-button">
                        Add
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default NewJobPost;

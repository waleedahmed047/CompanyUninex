import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    Typography,
    Avatar,
    Divider,
    Grid,
    Tabs,
    Tab
} from "@mui/material";
import "./StudentProfile.css";
import StarIcon from '@mui/icons-material/Star';
import PortfolioModal from '../../Components/Modals/PortfolioModal/PortfolioModal';
import Studencap from '../../assets/StudentProfile/cap.svg';
import FeedbackModal from '../../Components/Modals/FeedbackModal/FeedbackModal'

const StudentProfile = () => {

    const [skills, setSkills] = useState([]);
    const [portfolios, setPortfolios] = useState([]);
    const [selectedPortfolio, setSelectedPortfolio] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [openFeedbackModal, setOpenFeedbackModal] = useState(false);

    useEffect(() => {
        fetch("Api/Student/services.json")
            .then((response) => response.json())
            .then((data) => setSkills(data))
            .catch((error) => console.error("Error fetching skills:", error));

        fetch("Api/Student/portfolios.json")
            .then((response) => response.json())
            .then((data) => setPortfolios(data))
            .catch((error) => console.error("Error fetching portfolios:", error));

        fetch("Api/Student/education.json")
            .then((response) => response.json())
            .then((data) => setEducation(data))
            .catch((error) => console.error("Error fetching education data:", error));

        fetch("Api/Student/experience.json")
            .then((response) => response.json())
            .then((data) => setExperience(data))
            .catch((error) => console.error("Error fetching experience data:", error));

        fetch("Api/Student/feedback.json")
            .then((response) => response.json())
            .then((data) => setFeedbacks(data))
            .catch((error) => console.error("Error fetching feedback:", error));


    }, []);

    const [coverImage, setCoverImage] = useState("https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?cs=srgb&dl=pexels-bertellifotografia-573299.jpg&fm=jpg");
    const [profilePic, setProfilePic] = useState("https://t3.ftcdn.net/jpg/03/28/77/18/360_F_328771873_4BLjs8Trc7aUmoeUmFmtLAjJaVGCnlmi.jpg");

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const students = [
        {
            image: 'https://epe.brightspotcdn.com/dims4/default/077f7f7/2147483647/strip/true/crop/3000x1688+0+156/resize/1200x675!/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.us-east-1.amazonaws.com%2F6f%2F85%2Fe37c2252473596dc9bf8007aff0a%2Fells-092023-515272618.jpg'
            ,
            name: 'Faizi Rahman',
            status: 'Software Developer',
            rating: '4.3',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9bujy4-9aGSEZa0GgfpGHvWYQ6yA4EdjR6g&s',
            name: 'Daniyal Afzal',
            status: 'Software Developer',
            rating: '4.2',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwCFY08Wpu72XrKKpCIfNyRBe4VH7hGEw50n7KcBLGHXoouWU-27fRCStwA9-XgwFkf0E&usqp=CAU',
            name: 'Ahsan Ali',
            status: 'Software Developer',
            rating: '4.1',
        }
    ]

    const openModal = (portfolio) => {
        setSelectedPortfolio(portfolio);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPortfolio(null);
    };

    const handleOpenFeedbackModal = () => setOpenFeedbackModal(true);
    const handleCloseFeedbackModal = () => setOpenFeedbackModal(false);

    const handleSubmitReview = (newReview) => {
        const newFeedback = {
            id: feedbacks.length + 1,
            avatar: newReview.comment[0].toUpperCase(),
            name: "Anonymous User",
            post_on: new Date().toISOString().split("T")[0],
            rating: newReview.rating,
            review: newReview.comment,
        };

        setFeedbacks([newFeedback, ...feedbacks]);
    };

    return (
        <div className="studentProfile-main">
            <div className="studentProfile-left" >
                <Box className="profile-header">
                    <Box
                        className="cover-image"
                        style={{
                            backgroundImage: `url(${coverImage})`,
                        }}
                    >
                    </Box>

                    <Grid container spacing={2} alignItems="center" className="profile-info">
                        <Grid item>
                            <Avatar src={profilePic} className="header-profile-picture" />
                        </Grid>
                        <Grid item xs>
                            <Typography variant="h5" className="profile-name">
                                Faizi Rahman
                            </Typography>
                            <Typography variant="body1" className="additional-info-data-title">
                                Student
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" className="message-profile-button">
                                Message
                            </Button>
                            <Button variant="contained" className="follow-profile-button">
                                Follow
                            </Button>
                            <Button variant="contained" className="contract-profile-button">
                                Contract
                            </Button>
                        </Grid>
                    </Grid>
                    <div className="additional-info-main">
                        <Grid container spacing={3} className="additional-info">
                            <Grid item xs={2}>
                                <Typography variant="subtitle2" className="additional-info-data-title">Study:</Typography>
                                <Typography className="additional-info-data">B.Sc in CSE</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Grid item xs={3}>
                                <Typography variant="subtitle2" className="additional-info-data-title">Institute:</Typography>
                                <Typography className="additional-info-data">Dhaka University</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Grid item xs={2}>
                                <Typography variant="subtitle2" className="additional-info-data-title">Gender:</Typography>
                                <Typography className="additional-info-data">Male</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem />

                            <Grid item xs={2}>
                                <Typography variant="subtitle2" className="additional-info-data-title">Country:</Typography>
                                <Typography className="additional-info-data">Bangladesh</Typography>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
                <Box className='studentProfile-tabs' sx={{ width: '100%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="Profile tabs"
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab label="About Me" />
                        <Tab label="Portfolio" />
                        <Tab label="Education" />
                        <Tab label="Experience" />
                        <Tab label="Your CV" />
                        <Tab label="Feedback & Review" />
                    </Tabs>

                    <Box sx={{ padding: 3 }}>
                        {value === 0 &&
                            <div>
                                <div className="studentProfile-aboutme">
                                    <h1>About Me</h1>
                                    <p>
                                        As a frontend developer, you're the architect of the user experience. You craft the digital spaces where users interact, ensuring functionality, aesthetics, and accessibility are seamlessly woven together. Your code is the foundation of intuitive interfaces, responsive designs, and captivating visuals that captivate and engage users. You're fluent in the languages of HTML, CSS, and JavaScript, and you're always exploring new frameworks and technologies to stay ahead in the ever-evolving world of web development. Whether it's optimizing performance, troubleshooting bugs, or bringing creative designs to life, you're the master of the frontend realm, shaping the digital landscapes that define our online experiences.
                                    </p>
                                </div>
                                <div className="dashboard-skills-list" >
                                    <h1>Skills</h1>
                                    {skills.length > 0 ? (
                                        <ul className="studentProfile-skills" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                            {skills.map((skill, index) => (
                                                <li className="skill-lititem" key={index}>{skill}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>Loading skills...</p>
                                    )}
                                </div>
                            </div>
                        }
                        {value === 1 &&
                            <div>
                                <h1 className="student-portfolio-header" >Portfolio</h1>
                                <div className="studentProfile-portfolio">
                                    {portfolios.length > 0 ? (
                                        portfolios.map((portfolio) => (
                                            <div className="studentProfile-portfolio-image" onClick={() => openModal(portfolio)}
                                            >
                                                <img
                                                    key={portfolio.id}
                                                    src={portfolio.image}
                                                    alt={portfolio.title}
                                                    className="portfolio-image"
                                                />
                                            </div>

                                        ))
                                    ) : (
                                        <p>Loading images...</p>
                                    )}
                                </div>
                                <PortfolioModal isOpen={isModalOpen} onClose={closeModal} portfolio={selectedPortfolio} />
                            </div>
                        }
                        {value === 2 &&
                            <div>
                                {education.length > 0 ? (
                                    <ul className="education-list" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                        {education.map((edu) => (
                                            <li key={edu.id} className="education-item">
                                                <div>
                                                    <img src={Studencap} alt="cap" />
                                                </div>
                                                <div>
                                                    <h3 className="education-uni-name" >{edu.university}</h3>
                                                    <p className="education-uni-degree">{edu.degree}</p>
                                                    <p className="education-ui-year">{edu.start_year} - {edu.end_year}</p>
                                                </div>

                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>Loading education details...</p>
                                )}
                            </div>
                        }
                        {value === 3 &&
                            <div className="studentProfile-experience">
                                {experience.length > 0 ? (
                                    experience.map((exp) => (
                                        <div className="studentProfile-experience-main" key={exp.id} >
                                            <img className="student-profile-experience-img" src={exp.company_image} alt={exp.company_name} />
                                            <div>
                                                <h3 >{exp.post}</h3>
                                                <p >{exp.company_name}</p>
                                                <p >{exp.from} - {exp.to}</p>
                                                <p >{exp.location}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>Loading experience details...</p>
                                )}
                            </div>
                        }
                        {value === 4 && <Typography>Content for Feedback & Review</Typography>}

                        {value === 5 &&
                            <div className="studentProfile-feedback">
                                <h1>Feedback and Review</h1>
                                {feedbacks.length > 0 ? (
                                    feedbacks.map((feedback) => (
                                        <div key={feedback.id} className="studentProfile-feedback-main" >
                                            <div className="studentProfile-feedback-avatar">
                                                <Avatar src={feedback.avatar} />

                                            </div>
                                            <div className="studentProfile-feedback-details">
                                                <h3>{feedback.name}</h3>
                                                <p>{feedback.post_on}</p>
                                                <p>{feedback.review}</p>
                                            </div>
                                            <div className="studentProfile-feedback-rating">
                                                <StarIcon style={{ color: '#F8BF13' }} />
                                                <p>{feedback.rating}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>Loading feedback...</p>
                                )}
                                <div className="feedback-button">
                                    <Button variant="contained" onClick={handleOpenFeedbackModal} >Give your feedback</Button>
                                    <FeedbackModal
                                        open={openFeedbackModal}
                                        handleClose={handleCloseFeedbackModal}
                                        handleSubmit={handleSubmitReview}
                                    />
                                </div>

                            </div>}

                    </Box>
                </Box>
            </div>
            <div className="studentProfile-right" >
                <div className="studentProfile-right-header">
                    <h1>Rating</h1>
                    <Box display="flex" alignItems="center" justifyContent="center" color='#FCC347' >
                        <StarIcon />
                        <Typography sx={{ fontSize: '18px', marginTop: '4px' }} >4.5</Typography>
                    </Box>
                </div>
                <div className="studentProfile-right-subHeader">
                    <h1>Other Similar Profiles</h1>
                </div>
                <div className="studentProfile-right-profiles">
                    {students.map((student, index) => (
                        <Box key={index} className="studentProfile-right-profile">
                            <Box className="studentProfile-right-profile-image">
                                <img src={student.image} alt="profile" />
                            </Box>
                            <Box className="studentProfile-right-profile-info">
                                <Box>
                                    <Typography className="student-name-dashboard" >{student.name}</Typography>
                                    <Typography className="student-status-dashboard" >{student.status}</Typography>
                                </Box>
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" color='#FCC347' >
                                    <StarIcon />
                                    <Typography sx={{ fontSize: '12px', marginTop: '4px', color: 'black' }} >{student.rating}</Typography>
                                </Box>
                            </Box>
                            <Button className="student-profiles-follow-button" variant="contained" >Follow</Button>
                        </Box>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;

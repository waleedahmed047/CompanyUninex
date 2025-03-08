import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Avatar,
  Divider
} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import InterestedModal from '../../Components/Modals/InterestedModal/InterestedModal'
import './JobPost.css';
import { useNavigate } from "react-router-dom";

const JobPosts = () => {
  const [jobPosts, setJobPosts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [interestedPeople, setInterestedPeople] = useState([]);

  useEffect(() => {

    fetch("Api/job-posts.json")
      .then((response) => response.json())
      .then((data) => setJobPosts(data))
      .catch((error) => console.error("Error fetching job posts:", error));

    fetch("Api/interestedPeople.json")
      .then((res) => res.json())
      .then((data) => setInterestedPeople(data))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  const navigate = useNavigate();

  const handelIntrest = () => {
    // navigate('/new-job-post')
  };
  const handelApply = () => { };
  const students = [
    {
      image:
        "https://epe.brightspotcdn.com/dims4/default/077f7f7/2147483647/strip/true/crop/3000x1688+0+156/resize/1200x675!/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.us-east-1.amazonaws.com%2F6f%2F85%2Fe37c2252473596dc9bf8007aff0a%2Fells-092023-515272618.jpg",
      name: "Faizi Rahman",
      status: "Software Developer",
      rating: "4.3",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9bujy4-9aGSEZa0GgfpGHvWYQ6yA4EdjR6g&s",
      name: "Daniyal Afzal",
      status: "Software Developer",
      rating: "4.2",
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwCFY08Wpu72XrKKpCIfNyRBe4VH7hGEw50n7KcBLGHXoouWU-27fRCStwA9-XgwFkf0E&usqp=CAU',
      name: 'Ahsan Ali',
      status: 'Software Developer',
      rating: '4.1',
    }
  ]
  const handelJobPost = () => {
    navigate('/new-job-post')

  }

  return (
    <div className="job-posts-container">
      <div className="job-posts-left">
        <div className="job-posts-header">
          <h1>My Job Posts List</h1>
          <Button onClick={handelJobPost} className="job-post-button" variant="contained" color="primary">Add New Job </Button>
        </div>
        {jobPosts.length > 0 ? (
          jobPosts.map((job) => (
            <div key={job.id} className="job-post-card">
              <div className="job-post-header">
                <Avatar src={job.company_logo} alt={job.company_name} />
                <div className="job-post-info">
                  <h3>{job.job_title}</h3>
                  <p>{job.company_name}</p>
                </div>
                <div className="job-post-urgent">
                  <p className="job-post-side-title">
                    {job.urgent ? "Urgent" : "Not Urgent"}
                  </p>
                </div>
                <div className="job-post-stats-mobile">
                  <p>
                    <span>Total Apply: </span>
                    {job.no_of_applied}
                  </p>
                </div>
                <div className="job-post-stats-mobile-button">
                  <Button variant="contained" className="job-post-stat-view">
                    View Post
                  </Button>
                </div>
              </div>
              <div className="job-post-details">
                <Typography className="job-post-side-title" variant="body2">
                  <strong className="job-post-side-title">Salary: </strong>
                  {job.salary_per_month}
                </Typography>
                <Typography className="job-post-side-title" variant="body2">
                  <strong>Experience Required: </strong>
                  {job.experience_required}

                  <p>
                    {job.job_type} - {job.work_type}
                  </p>
                </Typography>
                <Typography className="job-post-side-title" variant="body2">
                  <strong>Post Date: </strong>
                  {job.post_date}
                </Typography>
                <Typography className="job-post-side-title" variant="body2">
                  <strong>Description: </strong>
                  {job.job_description}
                </Typography>
                <Divider sx={{ marginTop: "20px" }} />
                <div className="job-post-action-buttons">
                  <div
                    className="job-post-action-button"
                    onClick={() => setModalOpen(true)}
                  >
                    <p>{job.no_of_interested}</p>
                    <strong>Interest</strong>
                  </div>
                  <InterestedModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    people={interestedPeople}
                  />

                  <div className="job-post-action-button" onClick={handelApply}>
                    <p>{job.no_of_applied}</p>
                    <strong>Apply</strong>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading job posts...</p>
        )}
      </div>
      <div className="job-posts-right">
        <div className="studentProfile-right-header">
          <h1>Rating</h1>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="#FCC347"
          >
            <StarIcon />
            <Typography sx={{ fontSize: "16px", marginLeft: "5px" }}>
              4.5
            </Typography>
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
                  <Typography className="student-name">
                    {student.name}
                  </Typography>
                  <Typography className="student-status">
                    {student.status}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  color="#FCC347"
                >
                  <StarIcon />
                  <Typography
                    sx={{ fontSize: "12px", marginTop: "4px" }}
                    className="star-rating"
                  >
                    {student.rating}
                  </Typography>
                </Box>
              </Box>
              <Button
                className="student-profiles-follow-button"
                variant="contained"
                size="small"
              >
                Follow
              </Button>
            </Box>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobPosts;

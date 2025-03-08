import React, { useState } from "react";
import {
  Grid,
  Box,
  Button,
  LinearProgress,
  Divider,
  Avatar,
} from "@mui/material";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
// Logos
import TotalContract from '../../assets/Dashboard/totalContract.svg';
import TotalJobPost from '../../assets/Dashboard/totalJobPosts.svg';
import ActiveContract from '../../assets/Dashboard/activeContract.svg';
import ProfileView from '../../assets/Dashboard/profileViewed.svg';
// Component
import Card from "../../Components/Cards/DashboardCard/Card";
import ProfileViewGraph from "../../Components/Graphs/ProfileView/ProfileView";
import UsersByCountry from "../../Components/Graphs/UserByCountry/UsersByCountry";
import ScoutingCard from "../../Components/Cards/ScoutingCard/ScoutingCard";

export default function Dashboard() {
  const navigate = useNavigate();

  const handelViewMore = () => {
    navigate("/applications");
  };
  const cardData = [
    {
      img: TotalContract,
      title: "Total Contract",
      number: "105",
    },
    {
      img: TotalJobPost,
      title: "Total Job Post",
      number: "105",
    },
    {
      img: ActiveContract,
      title: "Active Contract",
      number: "105",
    },
    {
      img: ProfileView,
      title: "Profile View",
      number: "105",
    },
  ];

  const handelJobPost = () => {
    navigate('/new-job-post')

  }

  const progressData = [
    { label: "Web Developer(US)", value: 75, color: "#FCC347" },
    { label: "UI/UX Designer", value: 60, color: "#4CAF50" },
    { label: "Backend Developer", value: 85, color: "#2196F3" },
    { label: "Marketing", value: 85, color: "#3297a8" },
  ];

  const jobApplication = [
    {
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKhjlStfInUfiEWgt0JiRp4wrflpTJR2lJ6w&s",
      name: "Daniyal",
      designation: "MERN stack Developer",
      topMatch: true,
    },
    {
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF9uQrONdaCblWWa_rrGsaPddQXhvDZxbUzg&s",
      name: "Daniyal",
      designation: "MERN stack Developer",
      topMatch: false,
    },
    {
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLcSyFFhVEvunXeAFD1oTQOjTvTO43i4AptQeU_pumRU0GcTVRIOHK-D1v6Ce5TcpH9iY&usqp=CAU",
      name: "Daniyal",
      designation: "MERN stack Developer",
      topMatch: true,
    },
  ];

  return (
    <Box className="dashboard">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9} className="dashboard-left">
          <Box className="dashboard-cards">
            {cardData.map((data, index) => (
              <Card
                key={index}
                img={data.img}
                title={data.title}
                number={data.number}
              />
            ))}
          </Box>
          <Box className="profileView-graph">
            <ProfileViewGraph />
          </Box>
          <Box className="user-by-country">
            <UsersByCountry />
          </Box>
          <Box className="scouting-cards">
            <ScoutingCard />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          className="dashboard-right"
        >
          <Box className="dashboard-right-content" >
            <div className='dashboard-job-apply'>
              <Button onClick={handelJobPost} variant='contained' className='dashboard-job-apply-button' >Job Post</Button>
            </div>
            <div className="dashboard-insight-lineprogress">
              <h1 className="text-color">Insights</h1>
              {progressData.map((item, index) => (
                <div
                  key={index}
                  className="dashboard-insight-lineprogress-labels"
                >
                  <p className="text-color">{item.label}</p>
                  <LinearProgress
                    variant="determinate"
                    value={item.value}
                    sx={{
                      height: 6,
                      backgroundColor: "#f0f0f0",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: item.color,
                      },
                      borderRadius: 2,
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="dashboard-insight-lineprogress-bottom">
              <h2 className="text-color">Recent application in job post</h2>
              <Divider />
              {jobApplication.map((item, index) => (
                <>
                  <div className="dashboard-insight-lineprogress-job-posts">
                    <Avatar
                      className="dashboard-job-post-profile"
                      src={item.profileImage}
                    />
                    <div className="dashboard-job-posts">
                      <h1 className="text-color">{item.name}</h1>
                      <p>{item.designation}</p>
                      <Button
                        variant="outlined"
                        size="small"
                        className="dashboard-jobs-post-view-profile"
                      >
                        View Application
                      </Button>
                    </div>
                    {item.topMatch === true && (
                      <div className="dashboard-applicatins-matched">
                        <p>Top Matched</p>
                      </div>
                    )}
                  </div>
                  <Divider />
                </>
              ))}
              <Button
                onClick={handelViewMore}
                className="viewMore-dashboard-applications"
              >
                View More
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

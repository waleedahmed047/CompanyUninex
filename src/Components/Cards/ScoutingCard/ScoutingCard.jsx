import React, { useEffect, useState } from "react";
import "./ScoutingCard.css";
import { Avatar, Button, Chip, Divider } from "@mui/material";
import Arrow from "../../../assets/Dashboard/arrow.svg";
const ScoutingCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/Api/scouting.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="scouting-card-container">
      {data.map((item) => (
        <div key={item.id} className="scouting-card">
          <div className="scouting-card-upper">
            <div className="scouting-card-profile">
              <Avatar
                src={item.profilePic}
                alt={item.name}
                className="scoutting-image-profile"
              />
              <div className="scouting-card-data">
                <h3>{item.name}</h3>
                <p>{item.status}</p>
              </div>
            </div>
            <div className="scouting-tags">
              <Chip className="scouting-chip-top-match" label="Top Match" />
              <Chip className="scouting-chip" label={item.country} />
              <Chip className="scouting-chip" label={item.degree} />
              <Chip className="scouting-chip" label={item.gpa} />
            </div>
          </div>
          <Divider className="divider" />
          <div className="scouting-action-button">
            <Button
              size="small"
              className="scoutting-view-profile-button"
              onClick={() =>
                (window.location.href = "http://localhost:5174/student-profile")
              }
            >
              View Profile <img src={Arrow} />
            </Button>
            <div className="scouting-buttons-all">
              <Button
                className="scouting-follower-button"
                variant="outlined"
                size="small"
              >
                Follow
              </Button>
              <Button size="small" className="scouting-message-button">
                Message
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScoutingCard;

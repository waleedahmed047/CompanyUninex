import React from "react";
import WorldMap from "../../../assets/Dashboard/countryMap.svg";
import { LinearProgress } from "@mui/material";
import "./UsersByCountry.css";

const data = [
  { country: "United States", users: 1200 },
  { country: "India", users: 800 },
  { country: "Canada", users: 564 },
  { country: "Germany", users: 96 },
];

const WorldMapWithProgressBars = () => {
  const maxUsers = Math.max(...data.map((item) => item.users));

  return (
    <div className="user-by-countries">
      <div className="world-map">
        <img src={WorldMap} alt="World Map" />
      </div>

      <div>
        <h3 className="text-color">Users by Country</h3>
        {data.map((item) => (
          <div key={item.country} className="user-graph-main">
            <span
              className="text-color"
              style={{ marginBottom: "5px", fontSize: "12px" }}
            >
              {item.country}: {item.users}
            </span>
            <LinearProgress
              variant="determinate"
              value={(item.users / maxUsers) * 100}
              sx={{
                height: 5,
                borderRadius: 5,
                backgroundColor: "#e0e0e0",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#00CEF3",
                },
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldMapWithProgressBars;

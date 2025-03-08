import React, { useState } from "react";
import './ScoutingAlert.css'
import { FormControl, InputLabel, MenuItem, Select, Box, Divider } from "@mui/material";
import ScoutingCard from "../../Components/Cards/ScoutingCard/ScoutingCard";
export default function ScoutingAlert() {
  const [values, setValues] = useState({
    field: "",
    criteria: "",
    country: "",
    degree: "",
    gpa: "",
    status: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div className="scouting-main">
      <div className="scouting-alert-dropdowns-section">
        <h1>Scouting set field</h1>
        <Divider orientation="horizontal" flexItem />
        <div className="scouting-alert-dropdowns">
          {[
            { name: "field", label: "Field", options: ["Engineering", "Medical", "Business"] },
            { name: "criteria", label: "Criteria", options: ["Merit", "Need-based", "General"] },
            { name: "country", label: "Country", options: ["USA", "UK", "Canada"] },
            { name: "degree", label: "Degree", options: ["Bachelor", "Master", "PhD"] },
            { name: "gpa", label: "GPA", options: ["2.5", "3.0", "3.5", "4.0"] },
            { name: "status", label: "Added or Not Added", options: ["Added", "Not Added"] },
          ].map((dropdown) => (
            <FormControl key={dropdown.name} size="small" className="form-control-scouting">
              <InputLabel>{dropdown.label}</InputLabel>
              <Select
                size="small"
                name={dropdown.name}
                value={values[dropdown.name]}
                onChange={handleChange}
                label={dropdown.label}
              >
                {dropdown.options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ))}
        </div>
      </div>
      <div className="scouting-alert-list-section" >
        <ScoutingCard />
      </div>
    </div>
  )
}

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  Grid,
  Tabs,
  Tab,
  IconButton,
  Box,
  Divider,
  Chip
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import './Account.css'
export default function CompanyProfile() {
  const [companyData, setCompanyData] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    fetch("/Api/companyData.json")
      .then((res) => res.json())
      .then((data) => setCompanyData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (!companyData) return <Typography>Loading...</Typography>;

  return (
    <div className="company-profile-main" >
      {/* Left Section */}
      <div className="company-profile-left">
        <div className="company-profile-left-top">
          <Box
            sx={{
              backgroundImage: `url(${companyData.coverImage})`,
              backgroundSize: "cover",
              height: 150,
              position: "relative",
            }}
          >
            <IconButton sx={{ position: "absolute", top: 10, right: 10 }}>
              <EditIcon />
            </IconButton>
          </Box>
          <div className="company-profile-left-top-content">
            <Avatar
              src={companyData.profileImage}
              sx={{
                width: 120,
                height: 120,
                border: "4px solid white",
                position: "absolute",
                top: -50,
                left: 20,
              }}
              alt="Company Logo"
            />
            <div className="company-profile-left-top-content-text">
              <div className="company-profile-left-top-content-text-header">
                <div>
                  <Typography className="compony-name" fontWeight="bold">
                    {companyData.name}
                  </Typography>
                  <Typography color="textSecondary">{companyData.type}</Typography>
                </div>
                <div>
                  <Button className="edit-company-button" size="small" variant="contained">Edit Profile</Button>
                </div>
              </div>
              <Divider />
              <Box display="flex" gap={4} mt={1}>
                <Typography><b>Company Review:</b> {companyData.review}</Typography>
                <Typography><b>Total Employees:</b> {companyData.employees}</Typography>
                <Typography><b>Company Type:</b> {companyData.companyType}</Typography>
              </Box>
            </div>
          </div>
        </div>

        <div className="company-tabs-section" >
          <Tabs value={tabIndex} onChange={(event, newValue) => setTabIndex(newValue)} sx={{ mt: 2, borderBottom: 1, borderColor: "divider" }}>
            <Tab label="About" />
            <Tab label="Employ" />
            <Tab label="Career" />
            <Tab label="Contract Info" />
          </Tabs>
          <div className="company-tabs-content">
            {tabIndex === 0 && <Typography className="company-tab-content-titles" ><span> About the company:</span> <br></br> <p>{companyData.about}</p></Typography>}
            {tabIndex === 1 &&
              <div>
                <Typography className="employee-deail-header" >Employee details: {companyData.employees}</Typography>
                <div className="company-employees">
                  {companyData.employeesList.map((employee, index) => (
                    <div className="company-employee" key={index}>
                      <Avatar src={employee.profileImage} sx={{ width: '100px', height: '100px' }} />
                      <h1>{employee.name}</h1>
                      <p>{employee.designation}</p>
                    </div>
                  ))}
                </div>
              </div>}

            {tabIndex === 2 &&
              <div>
                <Typography className="employee-deail-header">Career Opportunities</Typography>
                <div className="company-career">
                  {companyData.careerList.map((job, index) => (
                    <div key={index} className="company-job">
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }} >
                        <Typography variant="body2" color="textSecondary">{job.salary}</Typography>
                        <Chip label={job.type} sx={{ backgroundColor: '#32BF74' }} />
                      </div>
                      <Typography variant="subtitle1" fontWeight="bold">{job.title}</Typography>


                      <div style={{ display: "flex", gap: "5px", margin: "10px 0", width: '100%' }}>
                        {job.skills.map((skill, idx) => (
                          <span key={idx} style={{ border: "1px solid #ccc", padding: "5px 10px", borderRadius: "20px", fontSize: "12px" }}>
                            {skill}
                          </span>
                        ))}
                      </div>
                      <Typography variant="body2">{job.description}</Typography>
                      <a href={job.link} style={{ color: "#00CEF3", marginTop: "10px", display: "block" }}>View Job</a>
                    </div>
                  ))}
                </div>
              </div>
            }
            
            {tabIndex === 3 &&
              <div>
                <Typography className="employee-deail-header">Contact Information</Typography>
                <div style={{ marginTop: "10px" }}>
                  {companyData.contactInfo.map((contact, index) => (
                    <div key={index} style={{ marginBottom: "10px" }}>
                      <Typography variant="subtitle2" fontWeight="bold">
                        {contact.type}:
                      </Typography>
                      {contact.type === "Website" ? (
                        <a href={contact.value} target="_blank" rel="noopener noreferrer" style={{ color: "#007bff" }}>
                          {contact.value}
                        </a>
                      ) : (
                        <Typography variant="body2">{contact.value}</Typography>
                      )}
                    </div>
                  ))}
                </div>
              </div>}
          </div>
        </div>
      </div>

      <Grid item xs={12} md={4}>
        <div className="account-left-status">
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6">Organization Status</Typography>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Box>
          <Typography><b>Founded:</b> {companyData.organizationStatus.founded}</Typography>
          <Typography><b>Industry:</b> {companyData.organizationStatus.industry}</Typography>
          <Typography><b>Founder:</b> {companyData.organizationStatus.founder}</Typography>
          <Typography><b>Funding:</b> {companyData.organizationStatus.funding}</Typography>
        </div>

        <div style={{ marginTop: '20px' }} className="account-left-status">
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6">Office Location</Typography>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Box>
          {companyData.officeLocations.map((office, index) => (
            <Box key={index} sx={{ mt: 2 }}>
              <Typography fontWeight="bold">{office.country} Office</Typography>
              <Typography color="textSecondary">{office.address}</Typography>
            </Box>
          ))}
        </div>
      </Grid>
    </div>
  );
}

import React, { useState } from 'react';
import './Applications.css';
import HeaderLogos from '../../assets/Application/applicationHeader.svg';
import {
    Button,
    Divider,
    Typography,
    Box,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Tabs,
    Tab,
    FormControlLabel,
    Switch,
    Avatar
} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import FilterIcon from '../../assets/Application/filter.svg'
import GradeIcon from '@mui/icons-material/Grade';
import { useNavigate } from 'react-router-dom';

export default function Applications() {
    const navigate = useNavigate();
    const [value, setValue] = useState(0);
    const [formData, setFormData] = useState({
        country: '',
        state: '',
        experience: '',
        degree: '',
        subject: '',
        designation: '',
        skill: '',
    });


    const dropdownData = {
        countries: ['Pakistan', 'Germany', 'USA'],
        states: ['Asia', 'Europe', 'USA'],
        experiences: ['1 year', '2 years', '3 years'],
        degrees: ['BSE', 'Masters', 'PHD'],
        subjects: ['CS', 'MBBS', 'Electrical'],
        designations: ['Frontend Developer', 'Backend Developer', 'Figma Designer'],
        skills: ['React', 'Next Js', 'Python'],
    };

    const allStudents = [
        {
            picture: 'https://play-lh.googleusercontent.com/jInS55DYPnTZq8GpylyLmK2L2cDmUoahVacfN_Js_TsOkBEoizKmAl5-p8iFeLiNjtE=w526-h296-rw',
            name: 'Faisi Ahmed',
            designation: 'Frontend Developer',
            rating: '4.5',
            country: 'Pakistan',
            city: 'Islamabad',
            skills: ['github', 'docker', 'figma', 'html/css']
        },
        {
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFxQu84PuCD_zpL1Yv_Gr4C7lNzm2L9fR7CA&s',
            name: 'Sara Khan',
            designation: 'Backend Developer',
            rating: '4.2',
            country: 'Pakistan',
            city: 'Karachi',
            skills: ['node.js', 'express', 'mongodb', 'javascript']
        },
        {
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90MxQZsHnokLBVizSnbHCy420QRu1AupPYBn6Pv9nt164IaePz4L8Cdc0X5AlDgAXPkU&usqp=CAU',
            name: 'Ali Raza',
            designation: 'UI/UX Designer',
            rating: '4.7',
            country: 'Pakistan',
            city: 'Lahore',
            skills: ['figma', 'adobe xd', 'photoshop', 'illustrator']
        },
        {
            picture: 'https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224_640.jpg',
            name: 'Maya Baloch',
            designation: 'Data Scientist',
            rating: '4.8',
            country: 'Pakistan',
            city: 'Islamabad',
            skills: ['python', 'pandas', 'machine learning', 'tensorflow']
        },
        {
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmiww1CxF6GeLJ_GCIbF5D2sQtbJAxDrtMSt0OramURFXwh8HrD6PqS9Hoprw9Ns2wPTk&usqp=CAU',
            name: 'Tariq Mehmood',
            designation: 'Project Manager',
            rating: '4.3',
            country: 'Pakistan',
            city: 'Karachi',
            skills: ['jira', 'agile', 'scrum', 'project management']
        },
        {
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQT08_1dF0iNLYfRnL2lbqnlXg5QKKofxDew&s',
            name: 'Nida Shah',
            designation: 'Software Engineer',
            rating: '4.1',
            country: 'Pakistan',
            city: 'Rawalpindi',
            skills: ['java', 'spring boot', 'mongodb', 'mysql']
        },
        {
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4K5Jr7qOXzWGjkc8cExl4NA1dWOS2LLlE2qWqK4sr9s_c0F4UJatN863_blFebqRQeMY&usqp=CAU',
            name: 'Usman Khalid',
            designation: 'Full Stack Developer',
            rating: '4.9',
            country: 'Pakistan',
            city: 'Faisalabad',
            skills: ['react', 'node.js', 'mongodb', 'express']
        },
        {
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3mr0rOaAemqvSNKmzBD-I6mcpod9HFQuCw&s',
            name: 'Sara Ali',
            designation: 'Digital Marketer',
            rating: '4.6',
            country: 'Pakistan',
            city: 'Karachi',
            skills: ['seo', 'content writing', 'social media', 'analytics']
        },
        {
            picture: 'https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8',
            name: 'Omar Bilal',
            designation: 'DevOps Engineer',
            rating: '4.4',
            country: 'Pakistan',
            city: 'Lahore',
            skills: ['docker', 'kubernetes', 'aws', 'linux']
        },
        {
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yi8lUjKNVqmWkbY2plqdttxFpzC2Efcq0g&s',
            name: 'Zainab Jamil',
            designation: 'Quality Assurance Engineer',
            rating: '4.2',
            country: 'Pakistan',
            city: 'Islamabad',
            skills: ['testing', 'selenium', 'automation', 'java']
        }
    ];

    const handleChange = (key) => (event) => {
        setFormData({ ...formData, [key]: event.target.value });
    };

    const handleTabs = (event, newValue) => {
        setValue(newValue);
    };

    const handelStudenProfile = () => {
        navigate('/student-profile')
    }

    const handleSubmit = () => {
        console.log('Submitting form data:', formData);

        fetch('/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Response from API:', data);
                alert('Form submitted successfully!');
            })
            .catch((error) => {
                console.error('Error submitting form:', error);
                alert('Failed to submit the form.');
            });
    };

    return (
        <div className="application-main">
            <div className="application-header">
                <img src={HeaderLogos} alt="Header" />
                <div className="application-header-content">
                    <h1>Advanced Search And Filters</h1>
                    <p>Customize your search parameters for better results</p>
                </div>
                <img src={HeaderLogos} alt="Header" />
            </div>
            <div className="application-filters-clear">
                <Button
                    size="small"
                    variant="outlined"
                    className="filter-clear-button"
                    onClick={() => setFormData({
                        country: '',
                        state: '',
                        experience: '',
                        degree: '',
                        subject: '',
                        designation: '',
                        skill: '',
                    })}
                >
                    Clear Filter
                </Button>

            </div>
            <div className="application-filter">
                <div className="application-filter-left">
                    <Box display="flex" alignItems="center" gap={2}>
                        <Typography className="application-location-title">Locations</Typography>
                        <Divider flexItem orientation="horizontal" />
                    </Box>
                    <Box className="application-filter-row">
                        <FormControl fullWidth size="small">
                            <InputLabel>Country</InputLabel>
                            <Select
                                sx={{ width: '250px' }}
                                value={formData.country}
                                onChange={handleChange('country')}
                            >
                                {dropdownData.countries.map((option, index) => (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth size="small">
                            <InputLabel>State</InputLabel>
                            <Select
                                sx={{ width: '250px' }}
                                value={formData.state}
                                onChange={handleChange('state')}
                            >
                                {dropdownData.states.map((option, index) => (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} mt={2}>
                        <Typography className="application-location-title">Experience</Typography>
                        <Divider flexItem orientation="horizontal" />
                    </Box>
                    <Box className="application-filter-row">
                        <FormControl fullWidth size="small">
                            <InputLabel>Experience</InputLabel>
                            <Select
                                sx={{ width: '520px' }}
                                value={formData.experience}
                                onChange={handleChange('experience')}
                            >
                                {dropdownData.experiences.map((option, index) => (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <Divider orientation='vertical' flexItem />
                <div className="application-filter-right">
                    <Box display="flex" alignItems="center" gap={2}>
                        <Typography className="application-location-title">Education</Typography>
                        <Divider flexItem orientation="horizontal" />
                    </Box>
                    <Box className="application-filter-row">
                        <FormControl fullWidth size="small">
                            <InputLabel>Degree</InputLabel>
                            <Select
                                sx={{ width: '250px' }}
                                value={formData.degree}
                                onChange={handleChange('degree')}
                            >
                                {dropdownData.degrees.map((option, index) => (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth size="small">
                            <InputLabel>Subject</InputLabel>
                            <Select
                                sx={{ width: '250px' }}
                                value={formData.subject}
                                onChange={handleChange('subject')}
                            >
                                {dropdownData.subjects.map((option, index) => (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} mt={2}>
                        <Typography className="application-location-title">Designation & Skill</Typography>
                        <Divider flexItem orientation="horizontal" />
                    </Box>
                    <Box className="application-filter-row">
                        <FormControl fullWidth size="small">
                            <InputLabel>Designation</InputLabel>
                            <Select
                                sx={{ width: '250px' }}
                                value={formData.designation}
                                onChange={handleChange('designation')}
                            >
                                {dropdownData.designations.map((option, index) => (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth size="small">
                            <InputLabel>Skill</InputLabel>
                            <Select
                                sx={{ width: '250px' }}
                                value={formData.skill}
                                onChange={handleChange('skill')}
                            >
                                {dropdownData.skills.map((option, index) => (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>
            <div className="application-filters-clear">
                <Button
                    size="small"
                    variant="contained"
                    className="filter-submit-button"
                    onClick={handleSubmit}
                    startIcon={<SearchIcon />}
                >
                    Search
                </Button>
            </div>
            <Box className="application-tabs" sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleTabs}
                    aria-label="tabs example"
                    className="tabs-container"
                >
                    <Tab
                        label="Top Match"
                        className={`tab-item ${value === 0 ? 'selected-tab' : ''}`}
                    />
                    <Tab
                        label="Education Match"
                        className={`tab-item ${value === 1 ? 'selected-tab' : ''}`}
                    />
                    <Tab
                        label="Designation & Skill"
                        className={`tab-item ${value === 2 ? 'selected-tab' : ''}`}
                    />
                    <Tab
                        label="Location"
                        className={`tab-item ${value === 3 ? 'selected-tab' : ''}`}
                    />
                    <Tab
                        label="All Results"
                        className={`tab-item ${value === 4 ? 'selected-tab' : ''}`}
                    />
                    <div className='application-recently-hired'>
                        <FormControlLabel control={<Switch className='recent-hired-checked' defaultChecked />} label="Recently Hired" />
                    </div>
                    <Button size='small' className='filtered-application-buttons' >
                        <img src={FilterIcon} alt='FilterIcon' />   Filter
                    </Button>
                </Tabs>
                <Box sx={{ pt: 3 }}>
                    {value === 0 &&
                        <div className='application-students-all'>
                            {allStudents.map((student, index) => (
                                <div className='application-student-card'>
                                    <div className='application-student-card-header'>
                                        <Avatar onClick={handelStudenProfile} className='application-student-profiles' src={student.picture} />
                                        <div className='application-student-card-header-info' >
                                            <h1>{student.name}</h1>
                                            <p>{student.designation}</p>
                                        </div>
                                        <div className='application-student-card-header-info' >
                                            <GradeIcon className='application-rating' />
                                            <p>{student.rating}</p>
                                        </div>
                                    </div>
                                    <div className='application-student-country-location'>
                                        <p>Country</p>
                                        <Divider orientation='vertical' flexItem />
                                        <span>{student.country}</span>
                                        <p>City</p>
                                        <Divider orientation='vertical' flexItem />
                                        <span>{student.city}</span>
                                    </div>
                                    <Divider />
                                    <h1 className='application-skills' >Skill</h1>
                                    <div className='application-skills-all' >
                                        {student.skills.map((skill, index) => (
                                            <p>{skill}</p>
                                        ))}
                                    </div>
                                    <div className='application-card-actions'>
                                        <Button variant='contained' className='application-card-actions-message'>Message</Button>
                                        <Button variant='outlined' className='application-card-actions-follow'>Follow</Button>
                                    </div>
                                </div>
                            ))}
                        </div>}
                    {value === 1 && <div>Education Match Content</div>}
                    {value === 2 && <div>Designation & Skill Content</div>}
                    {value === 3 && <div>Location Content</div>}
                    {value === 4 && <div>All Results Content</div>}
                </Box>
            </Box>
        </div>
    );
}

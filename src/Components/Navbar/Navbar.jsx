import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "../../assets/logo/day.svg";
import DarkModeIcon from "../../assets/logo/night.png";
import Logo from "../../assets/logo/Logo.svg";
import ProfileImage from "../../assets/logo/profile.svg";
import LogoutImage from "../../assets/logo/logoutIcon.svg";
import SearchLogo from "../../assets/logo/Magnifer.svg";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ toggleTheme, selectedItem }) => {
  
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme();
  };

  const handleLogout = () => {
    navigate("/");
  };

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  return (
    <>
      <AppBar position="static" className="navbar">
        <Toolbar className="navbar-toolbar">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            className="menu-icon"
          >
            <MenuIcon />
          </IconButton>
          <Typography className="logo-area">
            <img src={Logo} alt="Uninex Logo" className="logo" /> Uninex
          </Typography>
          <div className="nav-content-desktop">
            <Typography variant="h6" className="navbar-selectedTab">
              {selectedItem}
            </Typography>
            <div className="navbar-action-buttons">
              <div className="navbar-searchbar">
                <img src={SearchLogo} alt="Search Logo" />
                <input placeholder="Search anything globally" />
              </div>
              <Button
                className="theme-toggle-btn"
                onClick={handleThemeToggle}
                size="small"
                startIcon={
                  <img
                    src={isDarkMode ? LightModeIcon : DarkModeIcon}
                    alt="Theme Icon"
                    className="theme-icon"
                  />
                }
              >
                {isDarkMode ? "Day Mode" : "Night Mode"}
              </Button>
              <Button className="logout-button" onClick={handleLogout} startIcon={<img src={ProfileImage} alt="Profile" />}>
                Logout
              </Button>
            </div>

          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{ "& .MuiDrawer-paper": { width: "300px" } }}
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List>
          <ListItem button onClick={() => setDrawerOpen(false)}>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={() => setDrawerOpen(false)}>
            <ListItemText primary="Job" />
          </ListItem>
          <ListItem button onClick={() => setDrawerOpen(false)}>
            <ListItemText primary="Login" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;

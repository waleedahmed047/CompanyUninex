import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Layout.css";
import Navbar from "../Components/Navbar/Navbar";

// Logo Imports
import DashboardLogo from "../assets/sidebar/dashboard.svg";
import DashboardActiveLogo from "../assets/sidebar/dashboardActive.svg";
import StudentLogo from "../assets/sidebar/students.svg";
import StudentActiveLogo from "../assets/sidebar/studentActive.svg";
import MessagesLogo from "../assets/sidebar/messages.svg";
import MessagesActiveLogo from "../assets/sidebar/messageActive.svg";
import JobPostLogo from "../assets/sidebar/jobPost.svg";
import JobPostActiveLogo from "../assets/sidebar/jobPostActive.svg";
import FollowingsLogo from "../assets/sidebar/followingList.svg";
import FollowingsActiveLogo from "../assets/sidebar/followingListActive.svg";
import ScoutingLogo from "../assets/sidebar/scoutingAlert.svg";
import ScoutingActiveLogo from "../assets/sidebar/scoutingActiveLogo.svg";
import ContractLogo from "../assets/sidebar/notification.svg";
import ContractActiveLogo from "../assets/sidebar/notificationActive.svg";
import TransactionLogo from "../assets/sidebar/notification.svg";
import TransactionActiveLogo from "../assets/sidebar/notificationActive.svg";
import AccountLogo from "../assets/sidebar/account.svg";
import AccountActiveLogo from "../assets/sidebar/accountActive.svg";
import SupportLogo from "../assets/sidebar/support.svg";
import SupportActiveLogo from "../assets/sidebar/supportActive.svg";
import NotificationLogo from "../assets/sidebar/notification.svg";
import NotificationActiveLogo from "../assets/sidebar/notificationActive.svg";

const Layout = ({ children, toggleTheme }) => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const navigate = useNavigate();

  const handleNavigation = (itemName, path) => {
    setSelectedItem(itemName);
    navigate(path);
  };

  const getLogo = (itemName) => {
    switch (itemName) {
      case "Dashboard":
        return selectedItem === "Dashboard"
          ? DashboardActiveLogo
          : DashboardLogo;
      case "Student":
        return selectedItem === "Student" ? StudentActiveLogo : StudentLogo;
      case "Messages":
        return selectedItem === "Messages" ? MessagesActiveLogo : MessagesLogo;
      case "Job Post":
        return selectedItem === "Job Post" ? JobPostActiveLogo : JobPostLogo;
      case "Following List":
        return selectedItem === "Following List"
          ? FollowingsActiveLogo
          : FollowingsLogo;
      case "Scouting Alert":
        return selectedItem === "Scouting Alert"
          ? ScoutingActiveLogo
          : ScoutingLogo;
      case "Contract":
        return selectedItem === "Contract" ? ContractActiveLogo : ContractLogo;
      case "Transaction":
        return selectedItem === "Transaction"
          ? TransactionActiveLogo
          : TransactionLogo;
      case "Account":
        return selectedItem === "Account" ? AccountActiveLogo : AccountLogo;
      case "Support":
        return selectedItem === "Support" ? SupportActiveLogo : SupportLogo;
      case "Notification":
        return selectedItem === "Notification"
          ? NotificationActiveLogo
          : NotificationLogo;
      default:
        return DashboardLogo;
    }
  };

  return (
    <div className="layout">
      <Navbar selectedItem={selectedItem} toggleTheme={toggleTheme} />
      <div className="main-component">
        <div className="sidebar">
          <button
            onClick={() => handleNavigation("Dashboard", "/dashboard")}
            className={
              selectedItem === "Dashboard" ? "button-selected" : "button-normal"
            }
          >
            <div
              className={
                selectedItem === "Dashboard" ? "active-dot" : "nonActive-dot"
              }
            ></div>
            <img
              className="icon"
              src={getLogo("Dashboard")}
              alt="Dashboard Logo"
            />
            Dashboard
          </button>
          <button
            onClick={() => handleNavigation("Student", "/student")}
            className={
              selectedItem === "Student" ? "button-selected" : "button-normal"
            }
          >
            <div
              className={
                selectedItem === "Student" ? "active-dot" : "nonActive-dot"
              }
            ></div>
            <img className="icon" src={getLogo("Student")} alt="Student Logo" />
            Students
          </button>
          <button
            onClick={() => handleNavigation("Messages", "/messages")}
            className={
              selectedItem === "Messages" ? "button-selected" : "button-normal"
            }
          >
            <div
              className={
                selectedItem === "Messages" ? "active-dot" : "nonActive-dot"
              }
            ></div>
            <img
              className="icon"
              src={getLogo("Messages")}
              alt="Messages Logo"
            />
            Messages
          </button>
          <button
            onClick={() => handleNavigation("Job Post", "/job-post")}
            className={
              selectedItem === "Job Post" ? "button-selected" : "button-normal"
            }
          >
            <div
              className={
                selectedItem === "Job Post" ? "active-dot" : "nonActive-dot"
              }
            ></div>
            <img
              className="icon"
              src={getLogo("Job Post")}
              alt="Job Post Logo"
            />
            Job Post
          </button>
          <button
            onClick={() =>
              handleNavigation("Following List", "/following-list")
            }
            className={
              selectedItem === "Following List"
                ? "button-selected"
                : "button-normal"
            }
          >
            <div
              className={
                selectedItem === "Following List"
                  ? "active-dot"
                  : "nonActive-dot"
              }
            ></div>
            <img
              className="icon"
              src={getLogo("Following List")}
              alt="Following List Logo"
            />
            Following List
          </button>
          <button
            onClick={() =>
              handleNavigation("Scouting Alert", "/scouting-alert")
            }
            className={
              selectedItem === "Scouting Alert"
                ? "button-selected"
                : "button-normal"
            }
          >
            <div
              className={
                selectedItem === "Scouting Alert"
                  ? "active-dot"
                  : "nonActive-dot"
              }
            ></div>
            <img
              className="icon"
              src={getLogo("Scouting Alert")}
              alt="Scouting Alert Logo"
            />
            Scouting Alert
          </button>
          <button
            onClick={() => handleNavigation("Contract", "/contract")}
            className={
              selectedItem === "Contract" ? "button-selected" : "button-normal"
            }
          >
            <div
              className={
                selectedItem === "Contract" ? "active-dot" : "nonActive-dot"
              }
            ></div>
            <img
              className="icon"
              src={getLogo("Contract")}
              alt="Contract Logo"
            />
            Contract
          </button>
          <button
            onClick={() => handleNavigation("Transaction", "/transaction")}
            className={
              selectedItem === "Transaction"
                ? "button-selected"
                : "button-normal"
            }
          >
            <div
              className={
                selectedItem === "Transaction" ? "active-dot" : "nonActive-dot"
              }
            ></div>
            <img
              className="icon"
              src={getLogo("Transaction")}
              alt="Transaction Logo"
            />
            Transaction
          </button>
          <button
            onClick={() => handleNavigation("Account", "/account")}
            className={
              selectedItem === "Account" ? "button-selected" : "button-normal"
            }
          >
            <div
              className={
                selectedItem === "Account" ? "active-dot" : "nonActive-dot"
              }
            ></div>
            <img className="icon" src={getLogo("Account")} alt="Account Logo" />
            Account
          </button>
          <button
            onClick={() => handleNavigation("Support", "/support")}
            className={
              selectedItem === "Support" ? "button-selected" : "button-normal"
            }
          >
            <div
              className={
                selectedItem === "Support" ? "active-dot" : "nonActive-dot"
              }
            ></div>
            <img className="icon" src={getLogo("Support")} alt="Support Logo" />
            Support
          </button>
          <button
            onClick={() => handleNavigation("Notification", "/notification")}
            className={
              selectedItem === "Notification"
                ? "button-selected"
                : "button-normal"
            }
          >
            <div
              className={
                selectedItem === "Notification" ? "active-dot" : "nonActive-dot"
              }
            ></div>
            <img
              className="icon"
              src={getLogo("Notification")}
              alt="Notification Logo"
            />
            Notification
          </button>
        </div>

        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Students from './Pages/Students/Students';
import Messages from './Pages/Messages/Messages';
import JobPost from './Pages/JobPost/JobPost';
import Following from './Pages/FollowingList/FollowingList';
import ScoutingAlert from './Pages/ScoutingAlert/ScoutingAlert';
import Contract from './Pages/Contract/Contract';
import Transaction from './Pages/Transection/Transection';
import Account from './Pages/Account/Account';
import Support from './Pages/Support/Support';
import TicketDetails from "./Pages/TicketDetails/TicketDetails"; // Import the new component
import Notification from './Pages/Notification/Notification';
import Applications from "./Pages/Applications/Applications";
import StudentProfile from "./Pages/StudentProfile/StudentProfile";
import JobDetails from "./Pages/NewJobPost/JobDisplay/JobDisplay";
import { useState, useEffect } from "react";
import NewJobPost from "./Pages/NewJobPost/NewJobPost";
function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/*"
          element={
            <Layout toggleTheme={toggleTheme} >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard/*" element={<Dashboard />} >
                  <Route path="applications" element={<Applications />} />
                </Route>

                <Route path="/student" element={<Students />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/job-post/*" element={<JobPost />} >
                  <Route path="new-job-post" element={<NewJobPost />} />
                <Route path="job-details" element={<JobDetails />} />

                </Route>
                <Route path="/following-list" element={<Following />} />
                <Route path="/scouting-alert" element={<ScoutingAlert />} />
                <Route path="/contract" element={<Contract />} />
                <Route path="/transaction" element={<Transaction />} />
                <Route path="/account" element={<Account />} />
                <Route path="/support/*" element={<Support />}>
                  <Route path="ticket/:id" element={<TicketDetails />} />
                </Route>
                <Route path="support/ticket/:id" element={<TicketDetails />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/applications" element={<Applications />} />
                <Route path="/student-profile" element={<StudentProfile />} />
                <Route path="/new-job-post" element={<NewJobPost />} />
                <Route path="/job-details" element={<JobDetails />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

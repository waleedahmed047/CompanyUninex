import React, { useState, useEffect } from "react";
import {
  Box,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  TextField,
  Button,
  Paper,
  IconButton,
  Divider,
  InputAdornment,
} from "@mui/material";
import "./Messages.css";
import CallIcon from "../../assets/Chat/PhoneIcon.svg";
import VideoIcon from "../../assets/Chat/VideoIcon.svg";
import SearchIcon from "@mui/icons-material/Search";
import SendingButton from "../../assets/Chat/sendingButton.svg";
import ContractModal from "../../Components/Modals/ContractModal/ContractModal";

const MessageApp = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState(null);
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState({});
  const [inputMessage, setInputMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("Api/chats.json")
      .then((response) => response.json())
      .then((data) => setChats(data))
      .catch((error) => console.error("Error fetching chats:", error));
    console.log(chats);
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleMemberSelect = (member) => {
    setSelectedMember(member);
    setMessages((prevMessages) => ({
      ...prevMessages,
      [member.id]: member.messages || [],
    }));
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "" && selectedMember) {
      const newMessage = { text: inputMessage, sender: "me" };
      setMessages((prevMessages) => ({
        ...prevMessages,
        [selectedMember.id]: [
          ...(prevMessages[selectedMember.id] || []),
          newMessage,
        ],
      }));
      setInputMessage("");
    }
  };

  const filteredChats = chats
    .filter((member) => (tabIndex === 0 ? true : member.following))
    .filter((member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleFollowToggle = (member) => {
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === member.id ? { ...chat, following: !chat.following } : chat
      )
    );
  };

  return (
    <Box className="chat-messages-container">
      <Box className="chat-left-section">
        {selectedMember ? (
          <div className="chat-selected-member">
            <div className="chat-header">
              <div className="chat-header-profile">
                <Avatar src={selectedMember.avatar} />
                <h3> {selectedMember.name}</h3>
              </div>
              <div className="chat-header-actions">
                <IconButton>
                  <img src={CallIcon} alt="Call" className="icon" />
                </IconButton>
                <Divider orientation="vertical" flexItem />
                <IconButton>
                  <img src={VideoIcon} alt="Video" className="icon" />
                </IconButton>
                <Button
                  variant="outlined"
                  size="small"
                  className="chat-contract-button"
                  onClick={() => setOpen(true)}
                  sx={{ fontSize: "12px" }}
                >
                  Contract
                </Button>
              </div>
            </div>
            <ContractModal open={open} handleClose={() => setOpen(false)} />

            <div className="chat-all-chats">
              {messages[selectedMember.id]?.map((msg, index) => (
                <p
                  className="chats-of-all"
                  key={index}
                  style={{ textAlign: msg.sender === "me" ? "right" : "left" }}
                >
                  {msg.text}
                </p>
              ))}
            </div>
            <Box className="chat-senting-section" display="flex" mt={2}>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type a message..."
              />
              <Button onClick={handleSendMessage} style={{ marginLeft: 8 }}>
                <img src={SendingButton} />
              </Button>
            </Box>
          </div>
        ) : (
          <div className="chat-default-page">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="To :"
              className="chat-default-page-search"
            />
            <div className="chat-default-page-members">
              <List className="chat-default-page-list">
                {filteredChats.length > 0 ? (
                  filteredChats.map((member) => (
                    <ListItem
                      key={member.id}
                      button
                      onClick={() => handleMemberSelect(member)}
                    >
                      <ListItemAvatar>
                        <Avatar src={member.avatar} alt={member.name} />
                      </ListItemAvatar>
                      <p className="member-name-messages">{member.name}</p>
                    </ListItem>
                  ))
                ) : (
                  <p style={{ textAlign: "center", marginTop: "10px" }}>
                    No users found
                  </p>
                )}
              </List>
            </div>
          </div>
        )}
      </Box>

      <Box className="chat-right-section">
        <div className="chat-right-section-upper">
          <h1>Messages</h1>
          <Box
            display="flex"
            alignItems="center"
            mb={2}
            mt={1}
            sx={{ width: "100%" }}
            className="search-box-messages"
          >
            <IconButton>
              <SearchIcon className="icon" />
            </IconButton>
            <input
              type="text"
              placeholder="Search..."
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </Box>
        </div>

        <div className="chat-right-page-bottom">
          <Tabs value={tabIndex} onChange={handleTabChange} centered>
            <Tab label="History" />
            <Tab label="Following" />
          </Tabs>

          <List className="chat-right-bottom-list">
            {chats
              .filter((member) => (tabIndex === 0 ? true : member.following))
              .map((member) => (
                <ListItem key={member.id} className="chat-member-avatar-member">
                  <div
                    className="right-chat-bottom-lists"
                    onClick={() => handleMemberSelect(member)}
                  >
                    <ListItemAvatar>
                      <Avatar src={member.avatar} alt={member.name} />
                    </ListItemAvatar>
                    <p className="member-name-messages">{member.name}</p>
                  </div>

                  <Button
                    variant="outlined"
                    size="small"
                    className={`follow-button-click ${
                      member.following ? "followed" : "unfollowed"
                    }`}
                    onClick={() => handleFollowToggle(member)}
                    style={{
                      color: member.following ? " silver" : "#00CEF3",
                      fontSize: "12px",
                    }}
                  >
                    {member.following ? "Followed" : "Follow"}
                  </Button>
                </ListItem>
              ))}
          </List>
        </div>
      </Box>
    </Box>
  );
};

export default MessageApp;

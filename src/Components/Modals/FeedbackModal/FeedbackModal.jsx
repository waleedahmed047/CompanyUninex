import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import Rating from "@mui/material/Rating";

const FeedbackModal = ({ open, handleClose, handleSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const submitReview = () => {
    if (rating === 0 || comment.trim() === "") {
      alert("Please provide a rating and a comment.");
      return;
    }
    handleSubmit({ rating, comment });
    setRating(0);
    setComment("");
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="feedback-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "10px",
        }}
      >
        <Typography variant="h5" mb={2} fontWeight="bold">
          Feedback & Review
        </Typography>

        <Rating
          value={rating}
          onChange={(event, newValue) => setRating(newValue)}
          precision={0.5}
        />
        <TextField
          fullWidth
          multiline
          rows={3}
          variant="outlined"
          label="Your Review"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          sx={{ mt: 2 }}
        />

        <Button
          variant="contained"
          sx={{ mt: 3 }}
          fullWidth
          onClick={submitReview}
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default FeedbackModal;

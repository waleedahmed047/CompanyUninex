import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Modal = ({ isOpen, onClose, portfolio }) => {
    if (!portfolio) return null;

    return (
        <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>{portfolio.title}</DialogTitle>
            <DialogContent>
                <img src={portfolio.image} alt={portfolio.title} style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                <Typography variant="body1" style={{ marginTop: "16px" }}>
                    {portfolio.description}
                </Typography>
                <Typography variant="body2" style={{ marginTop: "8px" }}>
                    Tech: {portfolio.technologies.join(", ")}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Link  href={portfolio.link} target="_blank" rel="noopener noreferrer" style={{ marginRight: "auto" }}>
                    View Project
                </Link>
                <Button onClick={onClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Modal;

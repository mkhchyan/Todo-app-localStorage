import React, { useState } from "react";
import {
  Checkbox,
  IconButton,
  ListItem,
  List,
  FormGroup,
  FormControlLabel,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { IoMdClose } from "react-icons/io";

const Task = ({ todo, toggleComplete, removeTodo }) => {
  const [open, setOpen] = useState(false);

  const style = {
    width: "90%",
    bgcolor: "background.paper",
  };

  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={todo.completed}
                onClick={handleCheckboxClick}
                edge="start"
                style={{
                  color: "#008594",
                  "&$checked": {
                    color: "#008594",
                  },
                }}
              />
            }
            label={todo.task}
            style={{
              color: todo.completed ? "#ACACAC" : "#666666",
            }}
          />
        </FormGroup>

        <IconButton edge="end" onClick={handleClickOpen}>
          <IoMdClose />
        </IconButton>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogContent
            edge="center"
            style={{
              margin: "10% 0",
            }}
          >
            <DialogContentText
              style={{
                fontStyle: " normal",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "28px",
                color: "#008594",
              }}
            >
              Are you sure you want to delete?
            </DialogContentText>
          </DialogContent>
          <DialogActions
            style={{
              justifyContent: "center",
            }}
          >
            <Button
              onClick={handleRemoveClick}
              style={{
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "18px",
                lineHeight: "28px",
                color: "#174348",
                textTransform: "capitalize",
              }}
            >
              yes
            </Button>
            <Button
              onClick={handleClose}
              style={{
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "18px",
                lineHeight: "28px",
                color: "#174348",
                textTransform: "capitalize",
              }}
            >
              no
            </Button>
          </DialogActions>
        </Dialog>
      </ListItem>
      <Divider />
    </List>
  );
};

export default Task;

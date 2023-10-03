import React, { useContext } from "react";
import {
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Dialog,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import themeContext from "../../Theme/ThemeContext";
import { useNavigate } from "react-router-dom";

export default function SimpleDialog({ open, setOpen, sections, isLogged, setIsLogged }) {
  const { isDark, setTheme } = useContext(themeContext);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    setIsLogged(false);
    localStorage.removeItem('userData');
    navigate('/');
    // CometChat.logout()
    toast("Successfully Logged Out");
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth={"lg"}>
      <List>
        {sections.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton href={item.to}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        {isLogged && (
          <ListItemButton onClick={handleLogout}>
            <ListItemText primary='Logout' />
          </ListItemButton>
        )}
        <IconButton
          sx={{
            marginLeft: 1,
            marginTop: "3rem",
            marginBottom: 2,
          }}
          onClick={() => setTheme(!isDark)}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <div style={{ display: "flex", gap: 4 }}>
              <Brightness7Icon />
              <Typography>Bright</Typography>
            </div>
          ) : (
            <div style={{ display: "flex", gap: 4 }}>
              <Brightness4Icon />
              <Typography>Dark</Typography>
            </div>
          )}
        </IconButton>
      </List>
    </Dialog>
  );
}

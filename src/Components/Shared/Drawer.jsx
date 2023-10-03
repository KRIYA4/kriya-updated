import React, { useContext } from "react";
import {
  Typography,
  ListItemText,
  ListItemButton,
  ListItem,
  Box,
  Drawer,
  IconButton,
  List,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import themeContext from "../../Theme/ThemeContext";

export default function DrawerComponent({ open, setOpen, sections }) {
  const { isDark, setTheme } = useContext(themeContext);

  const theme = useTheme();

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setOpen(false)}
      style={{color:isDark ? "white":"black" }}
      onKeyDown={() => setOpen(false)}
    >
      <List>
        {sections.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton href={item.to}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
          {list()}
          <IconButton
            sx={{
              marginRight: "auto",
              marginLeft: 1,
              marginTop: "auto",
              marginBottom: 2,
            }}
            onClick={() => setTheme(!isDark)}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <div style={{ display: "flex", gap: 4 }}>
                <Brightness7Icon />
                <Typography>Dark</Typography>
              </div>
            ) : (
              <div style={{ display: "flex", gap: 4 }}>
                <Brightness4Icon />
                <Typography>Bright</Typography>
              </div>
            )}
          </IconButton>
        </Drawer>
      </React.Fragment>
    </div>
  );
}

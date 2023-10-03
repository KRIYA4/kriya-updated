import React, { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Logo from "../../Assets/LOGO.png";
import Drawer from "./Drawer";
import Menu from "./Menu";
import themeContext from "../../Theme/ThemeContext";

const sections = [
  { name: "Home", to: "/" },
  { name: "Collaboration", to: "/collaboration" },
  { name: "Creators", to: "/creators" },
  { name: "Contact Us", to: "/contactus" },
  { name: "JoinUs", to: "/joinus" },

];

function Navbar() {
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [drawerOpen, setOpen] = React.useState(false);

  const { isDark, setTheme } = useContext(themeContext);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="sticky" style={{ position: "fixed" ,background:isDark ? "#1C1B23" : "linear-gradient(#ABDCFF,#0396FF)" }}>
      <Menu open={drawerOpen} setOpen={setOpen} sections={sections} />
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Box
            component="img"
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              height: 70,
            }}
            alt="Your logo."
            src={Logo}
          /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 200,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            KRIYA
          </Typography>

          {/* <Box
            component="img"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1, height: 50 }}
            alt="Your logo."
            src={Logo}
          /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              fontWeight: 200,
              fontSize: 10,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            KRIYA
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setOpen(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: { md: "end" },
            }}
          >
            {sections.map((page) => {
              if (page.name === 'Home' || page.name === 'Collaboration' || page.name === 'Contact Us' || page.name === 'Creators' || page.name ==='JoinUs') {
                return (
                  <Button
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    href={page.to}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    {page.name}
                  </Button>
                );
              }

            })}



            <IconButton
              sx={{ ml: 1 }}
              onClick={() => setTheme(!isDark)}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

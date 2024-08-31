import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Work as WorkIcon,
  Description as DescriptionIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import logo from "../assets/avatar.png";

function Header() {
  const [navColour, setNavColour] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setNavColour(true);
      } else {
        setNavColour(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: navColour ? "primary.dark" : "primary.main" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component={Link}
            to="/"
            sx={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}
          >
            <img src={logo} alt="logo" style={{ height: 40, marginRight: 10 }} />
            <Typography variant="h6" noWrap>
              Hazel Yu
            </Typography>
          </Box>
          
          <Box sx={{ flexGrow: 1 }} />
          
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button component={Link} to="/" color="inherit" startIcon={<HomeIcon />}>
              Home
            </Button>
            <Button component={Link} to="/about" color="inherit" startIcon={<PersonIcon />}>
              About
            </Button>
            <Button component={Link} to="/project" color="inherit" startIcon={<WorkIcon />}>
              Projects
            </Button>
            <Button component={Link} to="/resume" color="inherit" startIcon={<DescriptionIcon />}>
              Resume
            </Button>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem component={Link} to="/" onClick={handleMenuClose}>
                <HomeIcon sx={{ mr: 1 }} /> Home
              </MenuItem>
              <MenuItem component={Link} to="/about" onClick={handleMenuClose}>
                <PersonIcon sx={{ mr: 1 }} /> About
              </MenuItem>
              <MenuItem component={Link} to="/project" onClick={handleMenuClose}>
                <WorkIcon sx={{ mr: 1 }} /> Projects
              </MenuItem>
              <MenuItem component={Link} to="/resume" onClick={handleMenuClose}>
                <DescriptionIcon sx={{ mr: 1 }} /> Resume
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
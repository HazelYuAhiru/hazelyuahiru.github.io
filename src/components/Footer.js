import React from "react";
import { Container, Grid2, Typography, IconButton } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container 
      maxWidth="xl" 
      sx={{ bgcolor: "colors.primary", color: "white", py: 3, mt: 4 }}
    >
      <Grid2 container justifyContent="space-between" alignItems="center">
        <Grid2 item md={4} textAlign="center">
          <Typography variant="h6">
            Developed by Hazel
          </Typography>
        </Grid2>
        <Grid2 item md={4} textAlign="center">
          <Typography variant="h6">
            Copyright © {year} 
          </Typography>
        </Grid2>
        <Grid2 item md={4} textAlign="center">
          <IconButton
            component="a"
            href="https://github.com/HazelYuAhiru"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <GitHub />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/yihong-yu-hazel/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <LinkedIn />
          </IconButton>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default Footer;
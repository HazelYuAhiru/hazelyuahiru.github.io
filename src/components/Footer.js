import React from "react";
import { Container, Grid, Typography, IconButton } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { GitHub, LinkedIn } from "@mui/icons-material";

function Footer() {
  const theme = useTheme();
  const year = new Date().getFullYear();

  return (
    <Container 
      maxWidth="l" 
      sx={{ bgcolor: theme.palette.primary.main, py: 3, mt: 4 }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item md={4} textAlign="center">
          <Typography variant="h8" color={theme.palette.text.contrast}>
            Developed by Hazel Yu
          </Typography>
        </Grid>
        <Grid item md={4} textAlign="center">
          <Typography variant="h8" color={theme.palette.text.contrast}>
            Copyright © {year} 
          </Typography>
        </Grid>
        <Grid item md={4} textAlign="center">
          <IconButton
            component="a"
            href="https://github.com/HazelYuAhiru"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: theme.palette.text.contrast }}
          >
            <GitHub />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/yihong-yu-hazel/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: theme.palette.text.contrast }}
          >
            <LinkedIn />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
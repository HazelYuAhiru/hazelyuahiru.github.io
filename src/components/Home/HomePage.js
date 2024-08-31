import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TypeWriter from './TypeWriter'; 
import homeLogo from '../../assets/homeImg.jpg'; 

function HomePage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: "2rem",
        marginTop: "64px",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography
              variant="h2"
              sx={{ 
                fontWeight: 'bold', 
                color: theme.palette.text.primary, 
                marginLeft: '1rem' 
              }}
            >
              I'M <TypeWriter />
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: 'flex',
              height: '100%',
              marginTop: '2rem',
              position: 'relative',
            }}
          >
            <Box
              component="img"
              src={homeLogo}
              alt="home pic"
              sx={{
                maxHeight: '450px',
                objectFit: 'contain',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HomePage;

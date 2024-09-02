import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TypeWriter from '../../components/TypeWriter'; 
import homeImg from '../../assets/Home/homeImg.jpg'; 
import { typeStrings } from './HomeStatic';

function IntroSection() {
    const theme = useTheme();

    return (
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
              I'M / WANNA-BE
              <TypeWriter strings={typeStrings} />
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
              src={homeImg}
              alt="home pic"
              sx={{
                maxHeight: '450px',
                objectFit: 'contain',
                borderRadius: '10px',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    );
}

export default IntroSection;
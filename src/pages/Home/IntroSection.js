import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TypeWriter from '../../components/TypeWriter'; 
import { typeStrings } from './HomeStatic';
import ModelDisplay from '../../components/ModelDisplay'; 
import duckModel from '../../assets/Home/Duck.glb';

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
            <Box sx={{ width: '100%', height: '100%' }}>
              <ModelDisplay url={duckModel} /> 
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
}

export default IntroSection;
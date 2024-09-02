import React from 'react';
import { Box } from '@mui/material';
import IntroSection from './IntroSection';
import NewsSection from './NewsSection';

function HomePage() {
  return (
    <Box
      sx={{
        padding: "2rem",
        marginTop: "64px",
      }}
    >
      <IntroSection />
      <Box sx={{ marginTop: "6rem" }}> 
        <NewsSection />
      </Box>
    </Box>
  );
}

export default HomePage;
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import AnimatedCard from '../../components/AnimatedCard'; 
import { newsItems } from './HomeStatic';

function NewsSection() {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h3" sx={{ marginBottom: "2rem", fontWeight: 'bold', color: theme.palette.text.contrast }}>
        Latest News & Updates
      </Typography>
      <Box>
        {newsItems.map((news, index) => (
          <AnimatedCard
            key={index}
            title={news.title}
            description={news.description}
            date={news.date}
            index={index}
          />
        ))}
      </Box>
    </Box>
  );
}

export default NewsSection;
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import AnimatedCard from '../../components/AnimatedCard'; 

function NewsSection() {
  const theme = useTheme();

  const newsItems = [
    {
      title: 'New Site Launched',
      description: 'I have successfully launched my personal website, showcasing my portfolio and resume.',
      date: 'August 28, 2024'
    },
    {
      title: 'Workshop Attended',
      description: 'I attended a workshop on advanced React techniques, learning about performance optimization and state management.',
      date: 'July 15, 2024'
    },
    {
      title: 'Admitted to SURF',
      description: 'My research on machine learning in language science was selected to join SURF.',
      date: 'June 10, 2024'
    },
  ];

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
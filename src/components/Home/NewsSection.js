import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Paper, Typography } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionPaper = motion(Paper);

function NewsSection() {
  const theme = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

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
      <Box ref={ref}>
        {newsItems.map((news, index) => (
          <MotionPaper
            key={index}
            elevation={3}
            sx={{ padding: "1.5rem", marginBottom: "1.5rem", opacity: 0, y: 20 }}
            animate={controls}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
              {news.title}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>
              {news.description}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {news.date}
            </Typography>
          </MotionPaper>
        ))}
      </Box>
    </Box>
  );
}

export default NewsSection;
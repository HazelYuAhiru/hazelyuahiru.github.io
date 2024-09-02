import React, { useEffect } from 'react';
import { Paper, Typography } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer';

const MotionPaper = motion(Paper);

const AnimatedCard = (props) => {
  const { title, description, date, link, index } = props;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const controls = useAnimation();
  const theme = useTheme();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <MotionPaper
      ref={ref}
      elevation={3}
      sx={{
        padding: '1.5rem',
        marginBottom: '1.5rem',
        opacity: 0,
        y: 20,
        display: 'flex',
        flexDirection: 'column',
      }}
      animate={controls}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 1.0, delay: index * 0.3 }}
    >
      <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: '0.5rem',
          flexGrow: 1,
          '& a:hover': {
            color: theme.palette.secondary.main,
          },
        }}
      >
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
            }}
          >
            {description}
          </a>
        ) : (
          description
        )}
      </Typography>
      <Typography variant="caption" color="textSecondary">
        {date}
      </Typography>
    </MotionPaper>
  );
};

export default AnimatedCard;
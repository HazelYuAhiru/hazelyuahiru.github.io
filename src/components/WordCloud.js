import { motion } from 'framer-motion';
import { Box } from "@mui/material";
import { TagCloud } from 'react-tagcloud';
import { useTheme } from '@mui/material/styles';

const generateRandomDelay = () => Math.random() * 2;

const blinkingAnimation = (delay) => ({
  initial: { opacity: 1 },
  animate: {
    opacity: [1, 0.4, 1],
    transition: {
      duration: 1.5,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

const CustomTagRenderer = (tag, size, color, key) => {
  // TODO: remove hardcoded words
  const specificWords = [
    "LANGUAGE I USED",
    "FRAMEWORKS I USED",
    "TECH I USED",
  ];
  
  const theme = useTheme();
  const themeColors = [
    theme.palette.primary.main,
    theme.palette.background.default,
    theme.palette.text.primary,
    theme.palette.primary.dark,
    theme.palette.warning.main,
  ];
  const specificColor = theme.palette.secondary.main;
  
  const randomColor = themeColors[Math.floor(Math.random() * themeColors.length)];
  const delay = generateRandomDelay();
  
  return specificWords.includes(tag.value) ? (
    <span
      key={key}
      style={{
        fontSize: `${size}px`,
        color: specificColor,
        margin: '5px',
        cursor: 'pointer',
        display: 'inline-block',
      }}
    >
      {tag.value}
    </span>
  ) : (
    <motion.span
      key={key}
      style={{
        fontSize: `${size}px`,
        color: randomColor,
        margin: '5px',
        cursor: 'pointer',
        display: 'inline-block',
      }}
      initial="initial"
      animate="animate"
      variants={blinkingAnimation(delay)}
    >
      {tag.value}
    </motion.span>
  );
};

const WordCloudComponent = ({ tags }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TagCloud
        tags={tags}
        minSize={30}
        maxSize={50}
        renderer={CustomTagRenderer}
        style={{ width: '100%', height: '100%' }} 
        randomSeed={32}
      />
    </Box>
  );
};

export default WordCloudComponent;
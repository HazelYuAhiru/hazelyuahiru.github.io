import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { styled, useTheme } from '@mui/system';

const SwitchWrapper = styled('div')(({ theme, checked }) => ({
  width: '200px',
  height: '50px',
  borderRadius: '25px',
  background: checked ? theme.palette.primary.main : theme.palette.secondary.main,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  cursor: 'pointer',
  overflow: 'hidden',
}));

const SwitchButton = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  width: '50%',
  height: '100%',
  background: theme.palette.background.paper,
  borderRadius: 'inherit',
  zIndex: 1,
  transition: '0.3s',
}));


const CustomSwitch = ({ checked, onChange, option1, option2 }) => {
  const theme = useTheme();

  return (
    <SwitchWrapper checked={checked} onClick={onChange}>
      <SwitchButton 
        initial={{ x: 0 }}
        animate={{ x: checked ? '100%' : '0%' }}
        transition={{ type: 'spring', stiffness: 300 }}
      />
      <Typography variant="h6" component="div" sx={{ width: '50%', textAlign: 'center', color: theme.palette.common.white, zIndex: 2 }}>
        {option1}
      </Typography>
      <Typography variant="h6" component="div" sx={{ width: '50%', textAlign: 'center', color: theme.palette.common.white, zIndex: 2 }}>
        {option2}
      </Typography>
    </SwitchWrapper>
  );
};

export default CustomSwitch;
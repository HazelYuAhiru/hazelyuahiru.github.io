import React from 'react';
import { GlobalStyles  } from '@mui/material';

const ThemeGlobalStyles = () => (
  <GlobalStyles
    styles={(theme) => ({
      body: {
        backgroundColor: theme.palette.background.default,
        margin: 0,
        padding: 0,
        fontFamily: theme.typography.fontFamily,
      },
    })}
  />
);

export default ThemeGlobalStyles;
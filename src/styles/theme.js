import { createTheme } from '@mui/material/styles';

const theme = {
    light: {
        background: '#f4f1de',
        text: '#3d405b',
        accent: '#f2cc8f',
    },
    dark: {
        background: '#3d405b',
        text: '#f4f1de',
        accent: '#f2cc8f',
    }
};
  
const getTheme = (mode) =>
    createTheme({
        palette: {
            mode: mode,
            background: {
                default: theme[mode].background,
            },
            text: {
                primary: theme[mode].text,
            },
            primary: {
                main: theme[mode].accent,
            },
        },
});

export default getTheme;
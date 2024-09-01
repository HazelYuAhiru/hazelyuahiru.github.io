import { createTheme } from '@mui/material/styles';

const theme = {
    light: {
        primary: {
            main: '#023047',
            dark: '#e4d99a',
        },
        secondary: {
            main: '#f4511e',
        },
        background: {
            default: '#ffc107',
            paper: '#ffffff',
        },
        error: {
            main: '#d62828',
        },
        info: {
            main: '#e07a5f',
        },
        text: {
            primary: '#023047',
            contrast: '#ffffff',
        },
        warning: {
            main: '#0277bd',
        },
    },
    dark: {
        // TODO: Implement dark theme
        background: '#3d405b',
        text: '#f4f1de',
        accent: '#f2cc8f',
    }
};

const getTheme = (mode) =>
    createTheme({
        palette: {
            mode: mode,
            primary: {
                main: theme[mode].primary.main,
                dark: theme[mode].primary.dark,
            },
            secondary: {
                main: theme[mode].secondary.main,
            },
            background: {
                default: theme[mode].background.default,
                paper: theme[mode].background.paper,
            },
            error: {
                main: theme[mode].error.main,
            },
            info: {
                main: theme[mode].info.main,
            },
            text: {
                primary: theme[mode].text.primary,
                contrast: theme[mode].text.contrast,
            },
            warning: {
                main: theme[mode].warning.main,
            },
        },
});

export default getTheme;
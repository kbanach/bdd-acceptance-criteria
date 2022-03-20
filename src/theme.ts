import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
    typography: {
        h1: {
            fontSize: '3rem',
        },
        h2: {
            fontSize: '2.5rem',
        },
        h3: {
            fontSize: '2rem',
        },
        h4: {
            fontSize: '1.5rem',
        },
        h5: {
            fontSize: '1.2rem',
        },
        h6: {
            fontSize: '1rem',
        },
    },
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;

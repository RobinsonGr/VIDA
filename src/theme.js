import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#4CAF50',
        },
        neutral: {
            main: '#f0f0f0', // Light, natural background
        },
        accent: {
            main: '#FFC107', // Vibrant yellow for call-to-actions
        } 
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h5: {
            fontWeight: 600,
        }
    }
});

export default theme;
import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
          main: '#4CAF50',   // Primary green
          light: '#dff2e3', // Lighter green for accents
        },
        neutral: {
          main: '#f0f0f0',   // Light background
          contrast: '#37474F' // Dark text for contrast 
        },
        accent: {
          main: '#FFC107',   // Vibrant yellow
          dark: '#FF9800'    // Slightly darker yellow
        },
      },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h5: {
            fontWeight: 600,
        }
    }
});

export default theme;
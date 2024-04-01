import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50',   // Primary green
      light: '#dff2e3', // Lighter green for accents
    },
    neutral: {
      main: '#f0f0f0',  // Light background
      contrast: '#37474F' // Dark text for contrast 
    },
    accent: {
      main: '#FFC107',  // Vibrant yellow
      dark: '#FF9800'   // Slightly darker yellow
    },
  },
  typography: {
    fontFamily: ['Oswald', 'sans-serif'].join(','), 
    h1: {
      fontFamily: 'Oswald, sans-serif', 
      fontWeight: 700,
 
    },
    // ... other headings (h2, h3, etc.) if you want Oswald for them
    button: {
      fontFamily: ['Merriweather', 'sans-serif'].join(','),
      fontWeight: 700,
     
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { 
          color: 'white' 
        }
      }
    },
    MuiOutlinedInput: { 
      styleOverrides: {
        root: { 
          //fontSize: '16px',
          //height: '70px',
          marginBottom: '10px'
        }
      } 
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          //display: 'flex',
          //alignItems: 'center',  
               
        },
      },
    }, 
  }
});

export default theme;

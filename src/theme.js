import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50',   
      light: '#dff2e3',
    },
    neutral: {
      main: '#f0f0f0',  
      contrast: '#37474F' 
    },
    accent: {
      main: '#FFC107', 
      dark: '#FF9800'   
    },
  },
  typography: {
    fontFamily: ['Oswald', 'sans-serif'].join(','), 
    h1: {
      fontFamily: 'Oswald, sans-serif', 
      fontWeight: 700,
 
    },
    button: {
      fontFamily: ['Merriweather', 'sans-serif'].join(','),
      fontWeight: 700,
     
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        //This only apply with contained btns, where I'm using green as a background 
        contained: { 
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

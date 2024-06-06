'use client';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const darkTheme = createTheme({
  typography: {
    fontFamily: "'SF Mono', sans-serif",
    allVariants: {
      color: '#ffffff', 
    },
  },
  palette: {
    mode: 'dark', 
    primary: {
      main: "#5130B5", 
    },
    background: {
      default: '#08030D', 
      paper: '#130921', 
    },
    text: {
      primary: '#ffffff', 
      secondary: '#b0b0b0',
    },
    
  },
});

export default darkTheme;

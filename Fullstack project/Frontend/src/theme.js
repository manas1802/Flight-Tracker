// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          width: '100%', // Make container full width
          maxWidth: '100%', // Ensure max-width is 100%
          paddingLeft: '16px', // Optional: Adjust padding if needed
          paddingRight: '16px', // Optional: Adjust padding if needed
        },
      },
    },
  },
});

export default theme;

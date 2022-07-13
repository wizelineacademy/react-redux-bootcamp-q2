import { createTheme } from '@mui/material';
import '@fontsource/open-sans';

export { default } from '@mui/material/styles/ThemeProvider';

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Open-Sans',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(',')
  }
});

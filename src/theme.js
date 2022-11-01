import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const mode = 'dark';
const theme = createTheme({
  palette: {
    mode,
  },
})
export default theme;
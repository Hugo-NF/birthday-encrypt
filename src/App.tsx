import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Letter from './views/Letter';
import GlobalStyles from './GlobalStyles';

const App = () => (
  <ThemeProvider theme={createTheme()}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <GlobalStyles />
    <Letter />
  </ThemeProvider>

);

export default App;

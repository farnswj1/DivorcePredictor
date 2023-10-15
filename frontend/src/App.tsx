import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box, createTheme, CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { pink } from '@mui/material/colors';
import Routes from 'routes';
import { Footer } from 'layouts';

const App: FC = () => {
  const theme: Theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: pink[400]
      },
      background: {
        default: '#fadadd'
      }
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            padding: '2rem',
            borderRadius: '2rem'
          }
        }
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box marginY={5}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default App;

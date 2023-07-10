import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box, createTheme, CssBaseline, Theme, ThemeProvider } from '@mui/material';
import Routes from 'routes';

const App: FC = () => {
  const theme: Theme = createTheme({
    palette: {
      mode: 'light',
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
          },
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: '#fe4164',
            '&:hover': {
              backgroundColor: '#e52b50'
            }
          }
        }
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box marginY={5}>
          <Routes />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

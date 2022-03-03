import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Box, Container, createTheme, CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { Home } from 'views/Home';
import { Prediction } from 'views/Prediction';
import { Error404 } from 'views/Error404';

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
        <Box>
          <Container sx={{ my: 5 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/prediction" component={Prediction} />
              <Route path="*" component={Error404} />
            </Switch>
          </Container>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

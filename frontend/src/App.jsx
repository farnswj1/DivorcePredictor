import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import { Home } from './views/Home';
import { Prediction } from './views/Prediction';
import { Error404 } from './views/Error404';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.theme = createTheme({
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
  }

  render() {
    return (
      <ThemeProvider theme={this.theme}>
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
  }
}

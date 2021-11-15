import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import { Home } from './home';
import { Prediction } from './prediction';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.theme = createTheme({
      palette: {
        mode: 'light'
      }
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
              </Switch>
            </Container>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

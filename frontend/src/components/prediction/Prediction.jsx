import React from 'react';
import { Grid, Paper } from '@mui/material';
import PredictionForm from './PredictionForm';
import PredictionOutcome from './PredictionOutcome';
import axios from 'axios';

export default class Prediction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prediction: null,
      error: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.target);
    const data = Object.fromEntries(form.entries());

    const config = {
      headers: {
        'Content-Type': 'application/json',
      }
    };

    axios.post(process.env.REACT_APP_API_URL + 'divorces/prediction', data, config)
      .then(response => this.setState({ prediction: response.data.prediction, error: null }))
      .catch(error => this.setState({ prediction: null, error: error.response.status }));
  }

  resetForm() {
    this.setState({ prediction: null, error: null });
  }

  render() {
    const { prediction, error } = this.state;
    return (
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item >
          <Paper>
            {
              prediction !== null ? (
                <PredictionOutcome prediction={prediction} resetForm={this.resetForm} />
                ) : (
                <PredictionForm handleSubmit={this.handleSubmit} error={error}/>
              )
            }
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

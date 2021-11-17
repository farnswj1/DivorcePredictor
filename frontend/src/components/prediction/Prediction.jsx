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

    const data = {
      q01: event.target.q01.value,
      q02: event.target.q02.value,
      q03: event.target.q03.value,
      q04: event.target.q04.value,
      q05: event.target.q05.value,
      q06: event.target.q06.value,
      q07: event.target.q07.value,
      q08: event.target.q08.value,
      q09: event.target.q09.value,
      q10: event.target.q10.value,
      q11: event.target.q11.value,
      q12: event.target.q12.value,
      q13: event.target.q13.value,
      q14: event.target.q14.value,
      q15: event.target.q15.value,
      q16: event.target.q16.value,
      q17: event.target.q17.value,
      q18: event.target.q18.value,
      q19: event.target.q19.value,
      q20: event.target.q20.value,
      q21: event.target.q21.value,
      q22: event.target.q22.value,
      q23: event.target.q23.value,
      q24: event.target.q24.value,
      q25: event.target.q25.value,
      q26: event.target.q26.value,
      q27: event.target.q27.value,
      q28: event.target.q28.value,
      q29: event.target.q29.value,
      q30: event.target.q30.value,
      q31: event.target.q31.value,
      q32: event.target.q32.value,
      q33: event.target.q33.value,
      q34: event.target.q34.value,
      q35: event.target.q35.value,
      q36: event.target.q36.value,
      q37: event.target.q37.value,
      q38: event.target.q38.value,
      q39: event.target.q39.value,
      q40: event.target.q40.value,
      q41: event.target.q41.value,
      q42: event.target.q42.value,
      q43: event.target.q43.value,
      q44: event.target.q44.value,
      q45: event.target.q45.value,
      q46: event.target.q46.value,
      q47: event.target.q47.value,
      q48: event.target.q48.value,
      q49: event.target.q49.value,
      q50: event.target.q50.value,
      q51: event.target.q51.value,
      q52: event.target.q52.value,
      q53: event.target.q53.value,
      q54: event.target.q54.value
    };

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
    const { prediction } = this.state;
    return (
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item >
          <Paper>
            {
              prediction !== null ? (
                <PredictionOutcome prediction={prediction} resetForm={this.resetForm} />
                ) : (
                <PredictionForm handleSubmit={this.handleSubmit}/>
              )
            }
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

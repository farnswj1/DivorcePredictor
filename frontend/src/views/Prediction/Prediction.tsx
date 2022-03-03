import React, { ChangeEvent, FC, useState } from 'react';
import PredictionForm from './PredictionForm';
import PredictionOutcome from './PredictionOutcome';
import axios from 'axios';

const Prediction: FC = () => {
  const [prediction, setPrediction] = useState<boolean | null>(null);
  const [error, setError] = useState<number | null>(null);

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const form: FormData = new FormData(event.target);
    const data: object = Object.fromEntries(form.entries());

    const config: object = {
      headers: {
        'Content-Type': 'application/json',
      }
    };

    axios.post(process.env.REACT_APP_API_URL + 'divorces/prediction', data, config)
      .then(response => {
        setPrediction(response.data.prediction);
        setError(null);
      })
      .catch(error => {
        setPrediction(null);
        setError(error.response.status);
      });
  }

  const resetForm = (): void => {
    setPrediction(null);
    setError(null);
  };

  return (
    prediction !== null ? (
      <PredictionOutcome prediction={prediction} resetForm={resetForm} />
    ) : (
      <PredictionForm handleSubmit={handleSubmit} error={error}/>
    )
  );
};

export default Prediction;

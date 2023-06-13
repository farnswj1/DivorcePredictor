import { ChangeEvent, FC, useState } from 'react';
import { GridItem } from 'components';
import { APIService } from 'services';
import PredictionForm from './PredictionForm';
import PredictionOutcome from './PredictionOutcome';

const PredictionPage: FC = () => {
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

    APIService.post('/api/divorces/prediction', data, config)
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
    <GridItem>
      {
        prediction !== null ? (
          <PredictionOutcome
            prediction={prediction}
            resetForm={resetForm}
          />
        ) : (
          <PredictionForm
            handleSubmit={handleSubmit}
            error={error}
          />
        )
      }
    </GridItem>
  );
};

export default PredictionPage;

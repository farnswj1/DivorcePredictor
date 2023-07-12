import { FC, FormEvent, useState } from 'react';
import { GridItem } from 'components';
import { APIService } from 'services';
import PredictionForm from './PredictionForm';
import PredictionOutcome from './PredictionOutcome';

const PredictionPage: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<number | null>(null);
  const [prediction, setPrediction] = useState<boolean | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setIsLoading(true);
    setStatus(null);
    setPrediction(null);

    const data: FormData = new FormData(event.currentTarget);

    APIService.post('/api/divorces/prediction', data)
      .then(response => {
        setPrediction(response.data.prediction);
        setStatus(response.status);
      })
      .catch(error => {
        setStatus(error.response.status);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const resetForm = (): void => {
    setPrediction(null);
    setStatus(null);
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
            disabled={isLoading}
            status={status}
          />
        )
      }
    </GridItem>
  );
};

export default PredictionPage;

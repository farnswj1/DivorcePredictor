import { FC, FormEvent, useState } from 'react';
import { Container, Paper, Stack } from '@mui/material';
import { APIService } from 'services';
import { setTitle } from 'utils';
import PredictionForm from './PredictionForm';
import PredictionOutcome from './PredictionOutcome';

const PredictionPage: FC = () => {
  setTitle('Will It Last?');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<number | null>(null);
  const [prediction, setPrediction] = useState<boolean | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setIsLoading(true);
    setStatus(null);
    setPrediction(null);

    const data: FormData = new FormData(event.currentTarget);

    APIService.post('/api/prediction', data)
      .then(response => {
        setPrediction(response.data);
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
    <Container>
      <Stack justifyContent="center" alignItems="center">
        <Paper>
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
        </Paper>
      </Stack>
    </Container>
  );
};

export default PredictionPage;

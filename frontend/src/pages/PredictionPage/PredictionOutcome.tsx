import { FC, MouseEventHandler } from 'react';
import { Button, Stack, Typography } from '@mui/material';

interface PredictionOutcomeProps {
  prediction: boolean | null,
  resetForm: MouseEventHandler<Element>
};

const PredictionOutcome: FC<PredictionOutcomeProps> = ({
  prediction,
  resetForm
}) => (
  <Stack spacing={5} textAlign="center">
    <Typography variant="h4">
      {`You are predicted to ${prediction ? 'NOT ' : ''}divorce.`}
    </Typography>
    <Button variant="contained" size="large" onClick={resetForm}>
      Reset
    </Button>
  </Stack>
);

export default PredictionOutcome;

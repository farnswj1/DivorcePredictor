import { FC, MouseEventHandler } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

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
    <Box>
      <Button variant="contained" size="large" onClick={resetForm}>
        Reset
      </Button>
    </Box>
  </Stack>
);

export default PredictionOutcome;

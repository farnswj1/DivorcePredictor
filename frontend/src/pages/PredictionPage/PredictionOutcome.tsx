import { FC, MouseEventHandler } from 'react';
import { Box, Button, Typography } from '@mui/material';

interface PredictionOutcomeProps {
  prediction: boolean | null,
  resetForm: MouseEventHandler<Element>
};

const PredictionOutcome: FC<PredictionOutcomeProps> = ({ prediction, resetForm }) => (
  <Box sx={{ textAlign: 'center' }}>
    <Typography variant="h4">
      {`You are predicted to ${prediction ? 'NOT ' : ''}divorce.`}
    </Typography>
    <Box sx={{ mt: 5 }}>
      <Button variant="contained" size="large" onClick={resetForm}>
        Reset
      </Button>
    </Box>
  </Box>
);

export default PredictionOutcome;

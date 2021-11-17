import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const PredictionOutcome = ({ prediction, resetForm }) => (
  <Box sx={{ textAlign: 'center' }}>
    <Typography variant="h4">
      {'You are predicted to ' + (prediction ? 'NOT ' : '') + 'divorce.'}
    </Typography>
    <Box sx={{ mt: 5 }}>
      <Button variant="contained" size="large" onClick={resetForm}>Reset</Button>
    </Box>
  </Box>
);

export default PredictionOutcome;

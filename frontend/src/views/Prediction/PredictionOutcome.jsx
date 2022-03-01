import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import GridItem from '../../components/GridItem';

const PredictionOutcome = ({ prediction, resetForm }) => (
  <GridItem>
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h4">
        {'You are predicted to ' + (prediction ? 'NOT ' : '') + 'divorce.'}
      </Typography>
      <Box sx={{ mt: 5 }}>
        <Button variant="contained" size="large" onClick={resetForm}>Reset</Button>
      </Box>
    </Box>
  </GridItem>
);

export default PredictionOutcome;

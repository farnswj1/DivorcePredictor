import React from 'react';
import { Grid, Paper } from '@mui/material';

const GridItem = ({ children }) => (
  <Grid container direction="row" justifyContent="center" alignItems="center">
    <Grid item >
      <Paper>
        {children}
      </Paper>
    </Grid>
  </Grid>
);

export default GridItem;

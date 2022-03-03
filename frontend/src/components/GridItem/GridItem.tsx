import React, { FC, ReactNode } from 'react';
import { Grid, Paper } from '@mui/material';

interface Props {
  children: ReactNode
};

const GridItem: FC<Props> = ({ children }) => (
  <Grid container direction="row" justifyContent="center" alignItems="center">
    <Grid item >
      <Paper>
        {children}
      </Paper>
    </Grid>
  </Grid>
);

export default GridItem;

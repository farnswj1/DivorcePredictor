import { FC, ReactNode } from 'react';
import { Grid, Paper } from '@mui/material';

interface GridItemProps {
  children: ReactNode
};

const GridItem: FC<GridItemProps> = ({ children }) => (
  <Grid container direction="row" justifyContent="center" alignItems="center">
    <Grid item>
      <Paper>
        {children}
      </Paper>
    </Grid>
  </Grid>
);

export default GridItem;

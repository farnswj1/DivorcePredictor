import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Box, Typography, Button } from '@mui/material';

const Error404 = () => (
  <Grid container direction="row" justifyContent="center" alignItems="center">
    <Grid item >
      <Paper>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3">Page Not Found</Typography>
          <Typography variant="h6">
            It appears you are lost. Click the button below.
          </Typography>
          <Box sx={{ mt: 5 }}>
            <Link to="/" >
              <Button variant="contained" size="large">Home</Button>
            </Link>
          </Box>
        </Box>
      </Paper>
    </Grid>
  </Grid>
);

export default Error404;

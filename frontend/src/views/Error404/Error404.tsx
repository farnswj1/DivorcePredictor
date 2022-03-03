import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import GridItem from 'components/GridItem';

const Error404: FC = () => (
  <GridItem>
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
  </GridItem>
);

export default Error404;

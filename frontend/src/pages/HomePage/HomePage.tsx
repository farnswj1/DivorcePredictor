import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { GridItem } from 'components';

const HomePage: FC = () => (
  <GridItem>
    <Box textAlign="center">
      <Typography variant="h3">
        Divorce Predictor
      </Typography>
      <Typography variant="h6">
        Will your marriage last? Find out now!
      </Typography>
      <Box marginTop={5}>
        <Link to="/prediction">
          <Button variant="contained" size="large">
            Click Here!
          </Button>
        </Link>
      </Box>
    </Box>
  </GridItem>
);

export default HomePage;

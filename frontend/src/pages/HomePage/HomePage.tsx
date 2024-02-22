import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Paper, Stack, Typography } from '@mui/material';
import { setTitle } from 'utils';

const HomePage: FC = () => {
  setTitle();

  return (
    <Container>
      <Stack
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Paper>
          <Typography variant="h3">
            Divorce Predictor
          </Typography>
          <Typography variant="h6" marginBottom={5}>
            Will your marriage last? Find out now!
          </Typography>
          <Button
            component={Link}
            variant="contained"
            size="large"
            to="/prediction"
          >
            Click Here!
          </Button>
        </Paper>
      </Stack>
    </Container>
  );
};

export default HomePage;

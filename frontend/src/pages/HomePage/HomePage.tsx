import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material';

const HomePage: FC = () => (
  <Container>
    <Stack justifyContent="center" alignItems="center">
      <Paper>
        <Box textAlign="center">
          <Typography variant="h3">
            Divorce Predictor
          </Typography>
          <Typography variant="h6">
            Will your marriage last? Find out now!
          </Typography>
          <Box marginTop={5}>
            <Button
              component={Link}
              variant="contained"
              size="large"
              to="/prediction"
            >
              Click Here!
            </Button>
          </Box>
        </Box>
      </Paper>
    </Stack>
  </Container>
);

export default HomePage;

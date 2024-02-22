import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Paper, Stack, Typography } from '@mui/material';
import { setTitle } from 'utils';

const PageNotFoundPage: FC = () => {
  setTitle('Page Not Found');

  return (
    <Container>
      <Stack
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Paper>
          <Typography variant="h3">
            Page Not Found
          </Typography>
          <Typography variant="h6" marginBottom={5}>
            It appears you are lost. Click the button below.
          </Typography>
          <Button
            component={Link}
            variant="contained"
            size="large"
            to="/"
          >
            Home
          </Button>
        </Paper>
      </Stack>
    </Container>
  );
};

export default PageNotFoundPage;

import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material';

const PageNotFoundPage: FC = () => (
  <Container>
    <Stack justifyContent="center" alignItems="center">
      <Paper>
        <Box textAlign="center">
          <Typography variant="h3">
            Page Not Found
          </Typography>
          <Typography variant="h6">
            It appears you are lost. Click the button below.
          </Typography>
          <Box marginTop={5}>
            <Link to="/">
              <Button variant="contained" size="large">
                Home
              </Button>
            </Link>
          </Box>
        </Box>
      </Paper>
    </Stack>
  </Container>
);

export default PageNotFoundPage;

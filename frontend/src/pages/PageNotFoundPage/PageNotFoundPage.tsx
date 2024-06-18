import { FC } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import { ButtonLink, CenteringStack, HeaderTypography } from 'components';
import { setTitle } from 'utils';

const PageNotFoundPage: FC = () => {
  setTitle('Page Not Found');

  return (
    <Container>
      <CenteringStack textAlign="center">
        <Paper>
          <HeaderTypography>
            Page Not Found
          </HeaderTypography>
          <Typography variant="h6" marginBottom={5}>
            It appears you are lost. Click the button below.
          </Typography>
          <ButtonLink variant="contained" size="large" to="/">
            Home
          </ButtonLink>
        </Paper>
      </CenteringStack>
    </Container>
  );
};

export default PageNotFoundPage;

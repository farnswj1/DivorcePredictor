import { FC } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import { ButtonLink, CenteringStack, HeaderTypography } from 'components';
import { setTitle } from 'utils';

const HomePage: FC = () => {
  setTitle();

  return (
    <Container>
      <CenteringStack textAlign="center">
        <Paper>
          <HeaderTypography>
            Divorce Predictor
          </HeaderTypography>
          <Typography variant="h6" marginBottom={5}>
            Will your marriage last? Find out now!
          </Typography>
          <ButtonLink variant="contained" size="large" to="/prediction">
            Click Here!
          </ButtonLink>
        </Paper>
      </CenteringStack>
    </Container>
  );
};

export default HomePage;

import { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';

const year = new Date().getFullYear();

const Footer: FC = () => (
  <Box component="footer" marginTop="auto">
    <Container maxWidth="lg">
      <Box textAlign="center" paddingY={3}>
        <Typography variant="h6">
          &copy; {year} Justin Farnsworth
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;

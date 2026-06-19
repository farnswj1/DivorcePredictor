import { type FC } from 'react';
import { Container, Text } from '@mantine/core';

const year = new Date().getFullYear();

const Footer: FC = () => (
  <Container component="footer" p="sm">
    <Text size="sm" span ta="center">
      &copy; {year} Justin Farnsworth. All rights reserved.
    </Text>
  </Container>
);

export default Footer;

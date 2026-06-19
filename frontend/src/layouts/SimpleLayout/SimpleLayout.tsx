import { Fragment, type FC, type PropsWithChildren } from 'react';
import { Center } from '@mantine/core';
import { Footer } from '~/layouts';

const SimpleLayout: FC<PropsWithChildren> = ({ children }) => (
  <Fragment>
    <Center component="main" p="lg" h="100%" style={{ flexGrow: 1 }}>
      {children}
    </Center>
    <Footer />
  </Fragment>
);

export default SimpleLayout;

import { type FC, type PropsWithChildren } from 'react';
import { Paper as MantinePaper, type PaperProps } from '@mantine/core';

const Paper: FC<PaperProps & PropsWithChildren> = (props) => (
  <MantinePaper shadow="md" bg="white" p="lg" {...props} />
);

export default Paper;

import { FC } from 'react';
import { Stack, StackProps } from '@mui/material';

const CenteringStack: FC<StackProps> = (props) => (
  <Stack justifyContent="center" alignItems="center" {...props} />
);

export default CenteringStack;

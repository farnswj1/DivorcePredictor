import { type FC } from 'react';
import { Title, type TitleProps } from '@mantine/core';

const HeaderTypography: FC<TitleProps> = (props) => (
  <Title order={2} {...props} />
);

export default HeaderTypography;

import { type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { Button, type ButtonProps } from '@mantine/core';

type ButtonLinkProps = LinkProps & ButtonProps;

const ButtonLink: FC<ButtonLinkProps> = (props) => (
  <Button component={Link} {...props} />
);

export default ButtonLink;

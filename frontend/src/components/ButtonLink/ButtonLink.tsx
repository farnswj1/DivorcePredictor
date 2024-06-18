import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { Button, ButtonProps } from '@mui/material';

type ButtonLinkProps = LinkProps & ButtonProps;

const ButtonLink: FC<ButtonLinkProps> = (props) => (
  <Button component={Link} {...props} />
);

export default ButtonLink;

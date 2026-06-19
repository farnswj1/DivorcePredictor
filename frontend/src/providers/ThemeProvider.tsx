import { type FC, type PropsWithChildren } from 'react';
import {
  MantineProvider,
  createTheme,
  virtualColor,
  type CSSVariablesResolver
} from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

const variables = { '--mantine-color-body': '#fadadd' } as const;

const resolver: CSSVariablesResolver = () => ({
  variables: {},
  light: variables,
  dark: variables
});

const theme = createTheme({
  primaryColor: 'primary',
  colors: {
    primary: virtualColor({
      name: 'primary',
      dark: 'pink',
      light: 'pink'
    }),
    error: virtualColor({
      name: 'error',
      dark: 'red',
      light: 'red'
    })
  },
  breakpoints: {
    sm: '40em'
  },
  defaultRadius: 'md'
});

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <MantineProvider
    theme={theme}
    forceColorScheme="light"
    cssVariablesResolver={resolver}
  >
    <Notifications autoClose={5000} />
    {children}
  </MantineProvider>
);

export default ThemeProvider;

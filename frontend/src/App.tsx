import { type FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '~/providers';
import { SimpleLayout } from './layouts';
import Routes from './routes';

const App: FC = () => (
  <ThemeProvider>
    <BrowserRouter>
      <SimpleLayout>
        <Routes />
      </SimpleLayout>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;

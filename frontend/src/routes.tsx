import { type FC } from 'react';
import { Routes as BrowserRoutes, Route } from 'react-router-dom';
import { PageNotFoundPage, HomePage } from '~/pages';

const Routes: FC = () => (
  <BrowserRoutes>
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<PageNotFoundPage />} />
  </BrowserRoutes>
);

export default Routes;

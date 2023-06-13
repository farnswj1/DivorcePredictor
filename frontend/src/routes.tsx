import { FC } from 'react';
import { Routes as BrowserRoutes, Route } from 'react-router-dom';
import { PageNotFoundPage, HomePage, PredictionPage } from 'pages';

const Routes: FC = () => (
  <BrowserRoutes>
    <Route path="/" element={<HomePage />} />
    <Route path="/prediction" element={<PredictionPage />} />
    <Route path="*" element={<PageNotFoundPage />} />
  </BrowserRoutes>
);

export default Routes;

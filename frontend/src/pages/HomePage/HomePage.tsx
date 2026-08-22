import { type FC } from 'react';
import { usePageState } from '~/hooks';
import { setTitle } from '~/utils';
import IdleView from './IdleView';
import FormView from './FormView';
import ResultView from './ResultView';

const HomePage: FC = () => {
  setTitle('Will It Last?');

  const {
    pageState,
    renderIdleView,
    renderFormView,
    renderResultView
  } = usePageState();

  switch (pageState.type) {
    case 'idle':
      return <IdleView onStart={renderFormView} />;
    case 'form':
      return <FormView onResultReceived={renderResultView} />;
    case 'result':
      return <ResultView prediction={pageState.prediction} onReset={renderIdleView} />;
    default:
      return null;
  }
};

export default HomePage;

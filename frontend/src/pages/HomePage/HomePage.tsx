import { type FC } from 'react';
import { usePageState } from '~/hooks';
import { PageState } from '~/types';
import IdleView from './IdleView';
import FormView from './FormView';
import ResultView from './ResultView';

const HomePage: FC = () => {
  const {
    pageState,
    renderIdleView,
    renderFormView,
    renderResultView
  } = usePageState();

  switch (pageState.type) {
    case PageState.Idle:
      return <IdleView onStart={renderFormView} />;
    case PageState.Form:
      return <FormView onResultReceived={renderResultView} />;
    case PageState.Result:
      return <ResultView prediction={pageState.prediction} onReset={renderIdleView} />;
    default:
      return null;
  }
};

export default HomePage;

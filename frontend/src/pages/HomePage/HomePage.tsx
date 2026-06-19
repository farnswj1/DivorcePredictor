import { type FC } from 'react';
import { usePageState } from '~/hooks';
import { PageState } from '~/types';
import IdleView from './IdleView';
import FormView from './FormView';
import ResultView from './ResultView';

const HomePage: FC = () => {
  const [pageState, dispatch] = usePageState();

  const renderFormView = () => dispatch({ type: PageState.Form });
  const renderResultView = (prediction: boolean) => {
    dispatch({ type: PageState.Result, prediction });
  };

  switch (pageState.type) {
    case PageState.Idle:
      return <IdleView onStart={renderFormView} />;
    case PageState.Form:
      return <FormView onResultReceived={renderResultView} />;
    case PageState.Result:
      return <ResultView prediction={pageState.prediction} onReset={renderFormView} />;
    default:
      return null;
  }
};

export default HomePage;

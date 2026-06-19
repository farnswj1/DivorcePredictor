import { useReducer } from 'react';
import { PageState } from '~/types';

interface IdleState {
  readonly type: PageState.Idle;
}

interface FormState {
  readonly type: PageState.Form;
}


interface ResultState {
  readonly type: PageState.Result;
  readonly prediction: boolean;
}

type State = IdleState | FormState | ResultState;

interface IdleAction {
  readonly type: PageState.Idle;
}

interface FormAction {
  readonly type: PageState.Form;
}

interface ResultAction {
  readonly type: PageState.Result;
  readonly prediction: boolean;
}

type Action = IdleAction | FormAction | ResultAction;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case PageState.Idle:
      return { type: PageState.Idle };
    case PageState.Form:
      return { type: PageState.Form };
    case PageState.Result:
      return { type: PageState.Result, prediction: action.prediction };
    default:
      return state;
  }
};

const initialState: State = { type: PageState.Idle };

interface UsePageStateReturn {
  pageState: State;
  renderIdleView: () => void;
  renderFormView: () => void;
  renderResultView: (prediction: boolean) => void;
}

const usePageState = (): UsePageStateReturn => {
  const [pageState, dispatch] = useReducer(reducer, initialState);

  const renderIdleView = () => dispatch({ type: PageState.Idle });
  const renderFormView = () => dispatch({ type: PageState.Form });
  const renderResultView = (prediction: boolean) => {
    dispatch({ type: PageState.Result, prediction });
  };

  return { pageState, renderIdleView, renderFormView, renderResultView };
};

export default usePageState;

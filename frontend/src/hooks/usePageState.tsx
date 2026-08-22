import { useReducer } from 'react';

const PageState = {
  IDLE: 'idle',
  FORM: 'form',
  RESULT: 'result'
} as const;

interface IdleState {
  readonly type: typeof PageState.IDLE;
}

interface FormState {
  readonly type: typeof PageState.FORM;
}

interface ResultState {
  readonly type: typeof PageState.RESULT;
  readonly prediction: boolean;
}

type State = IdleState | FormState | ResultState;

interface IdleAction {
  readonly type: typeof PageState.IDLE;
}

interface FormAction {
  readonly type: typeof PageState.FORM;
}

interface ResultAction {
  readonly type: typeof PageState.RESULT;
  readonly prediction: boolean;
}

type Action = IdleAction | FormAction | ResultAction;

const reducer = (state: State, action: Action): State => {
  const { type } = action;

  switch (type) {
    case PageState.IDLE:
    case PageState.FORM:
      return { type };
    case PageState.RESULT:
      return { type, prediction: action.prediction };
    default:
      return state;
  }
};

const initialState: State = { type: PageState.IDLE };

interface UsePageStateReturn {
  pageState: State;
  renderIdleView: () => void;
  renderFormView: () => void;
  renderResultView: (prediction: boolean) => void;
}

const usePageState = (): UsePageStateReturn => {
  const [pageState, dispatch] = useReducer(reducer, initialState);

  const renderIdleView = () => dispatch({ type: PageState.IDLE });
  const renderFormView = () => dispatch({ type: PageState.FORM });
  const renderResultView = (prediction: boolean) => {
    dispatch({ type: PageState.RESULT, prediction });
  };

  return { pageState, renderIdleView, renderFormView, renderResultView };
};

export default usePageState;

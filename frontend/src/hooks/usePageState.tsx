import { useReducer } from 'react';

type PageState = 'idle' | 'form' | 'result';

interface IdleState {
  readonly type: Extract<PageState, 'idle'>;
}

interface FormState {
  readonly type: Extract<PageState, 'form'>;
}

interface ResultState {
  readonly type: Extract<PageState, 'result'>;
  readonly prediction: boolean;
}

type State = IdleState | FormState | ResultState;

interface IdleAction {
  readonly type: Extract<PageState, 'idle'>;
}

interface FormAction {
  readonly type: Extract<PageState, 'form'>;
}

interface ResultAction {
  readonly type: Extract<PageState, 'result'>;
  readonly prediction: boolean;
}

type Action = IdleAction | FormAction | ResultAction;

const reducer = (state: State, action: Action): State => {
  const { type } = action;

  switch (type) {
    case 'idle':
    case 'form':
      return { type };
    case 'result':
      return { type, prediction: action.prediction };
    default:
      return state;
  }
};

const initialState: State = { type: 'idle' };

interface UsePageStateReturn {
  pageState: State;
  renderIdleView: () => void;
  renderFormView: () => void;
  renderResultView: (prediction: boolean) => void;
}

const usePageState = (): UsePageStateReturn => {
  const [pageState, dispatch] = useReducer(reducer, initialState);

  const renderIdleView = () => dispatch({ type: 'idle' });
  const renderFormView = () => dispatch({ type: 'form' });
  const renderResultView = (prediction: boolean) => {
    dispatch({ type: 'result', prediction });
  };

  return { pageState, renderIdleView, renderFormView, renderResultView };
};

export default usePageState;

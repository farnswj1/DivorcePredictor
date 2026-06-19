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

const usePageState = () => useReducer(reducer, initialState);

export default usePageState;

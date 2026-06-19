import { useReducer } from 'react';
import { isAxiosError, type AxiosResponse } from 'axios';
import { FetchStatus } from '~/types';

interface IdleOrPendingState {
  readonly loading: boolean;
  readonly status: null;
}

interface ResultOrErrorState {
  readonly loading: false;
  readonly status: number;
}

type State = IdleOrPendingState | ResultOrErrorState;

interface IdleOrPendingAction {
  readonly type: FetchStatus.Idle | FetchStatus.Pending;
}

interface ResultAction {
  readonly type: FetchStatus.Result;
  readonly response: AxiosResponse;
}

interface ErrorAction {
  readonly type: FetchStatus.Error;
  readonly error: unknown;
}

type Action = IdleOrPendingAction | ResultAction | ErrorAction;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case FetchStatus.Idle:
      return { loading: false, status: null };
    case FetchStatus.Pending:
      return { loading: true, status: null };
    case FetchStatus.Result:
      return { loading: false, status: action.response.status };
    case FetchStatus.Error: {
      const { error } = action;
      const status = (isAxiosError(error) && error.response)
        ? error.response.status
        : 500;
      return { loading: false, status };
    }
    default:
      return state;
  }
};

const initialState: State = { loading: false, status: null };

const useFetch = () => useReducer<State, [action: Action]>(reducer, initialState);

export default useFetch;

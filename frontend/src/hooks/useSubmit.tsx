import { useReducer } from 'react';
import { isAxiosError, type AxiosResponse } from 'axios';

type FetchStatus = 'idle' | 'pending' | 'success' | 'error';

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
  readonly type: Extract<FetchStatus, 'idle' | 'pending'>;
}

interface SuccessAction {
  readonly type: Extract<FetchStatus, 'success'>;
  readonly response: AxiosResponse;
}

interface ErrorAction {
  readonly type: Extract<FetchStatus, 'error'>;
  readonly error: unknown;
}

type Action = IdleOrPendingAction | SuccessAction | ErrorAction;

interface UseSubmitOptions<T, U> {
  onSubmit: (data: T) => Promise<AxiosResponse<U>>;
  onSuccess: (response: AxiosResponse<U>) => void;
}

interface UseSubmitReturn<T> {
  fetchState: State;
  submit: (data: T) => void;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'idle':
      return { loading: false, status: null };
    case 'pending':
      return { loading: true, status: null };
    case 'success':
      return { loading: false, status: action.response.status };
    case 'error': {
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

const useSubmit = <T, U>({
  onSubmit,
  onSuccess
}: UseSubmitOptions<T, U>): UseSubmitReturn<T> => {
  const [fetchState, dispatch] = useReducer<State, [action: Action]>(reducer, initialState);

  const submit = (data: T) => {
    dispatch({ type: 'pending' });

    onSubmit(data)
      .then((response) => onSuccess(response))
      .catch((error: unknown) => dispatch({ type: 'error', error }));
  };

  return { fetchState, submit };
};

export default useSubmit;

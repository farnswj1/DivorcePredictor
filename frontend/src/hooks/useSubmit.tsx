import { useReducer } from 'react';
import { isAxiosError, type AxiosResponse } from 'axios';

const FetchStatus = {
  IDLE: 'idle',
  PENDING: 'pending',
  SUCCESS: 'success',
  ERROR: 'error'
} as const;

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
  readonly type: typeof FetchStatus.IDLE | typeof FetchStatus.PENDING;
}

interface SuccessAction {
  readonly type: typeof FetchStatus.SUCCESS;
  readonly response: AxiosResponse;
}

interface ErrorAction {
  readonly type: typeof FetchStatus.ERROR;
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
    case FetchStatus.IDLE:
      return { loading: false, status: null };
    case FetchStatus.PENDING:
      return { loading: true, status: null };
    case FetchStatus.SUCCESS:
      return { loading: false, status: action.response.status };
    case FetchStatus.ERROR: {
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
    dispatch({ type: FetchStatus.PENDING });

    onSubmit(data)
      .then((response) => onSuccess(response))
      .catch((error: unknown) => dispatch({ type: FetchStatus.ERROR, error }));
  };

  return { fetchState, submit };
};

export default useSubmit;

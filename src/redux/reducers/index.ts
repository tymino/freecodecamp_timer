import { ActionName, IStore, IAction } from '../../types/redux';

const DEFAULT_BREAK_LENGTH = 5;
const DEFAULT_SESSION_LENGTH = 25;

const initState: IStore = {
  breakLength: DEFAULT_BREAK_LENGTH,
  sessionLength: DEFAULT_SESSION_LENGTH,
  isPause: true,
  timer: DEFAULT_SESSION_LENGTH,
};

export const reducer = (state = initState, action: IAction): IStore => {
  switch (action.type) {
    case ActionName.SET_BREAK:
      return {
        ...state,
        breakLength: action.payload,
      };
    case ActionName.SET_SESSION:
      return {
        ...state,
        sessionLength: action.payload,
      };

    case ActionName.SET_PLAYPAUSE:
      return {
        ...state,
        isPause: !state.isPause,
      };

    default:
      return state;
  }
};

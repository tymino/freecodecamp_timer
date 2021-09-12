import { ActionName, IStore, IAction } from '../../types/redux';

const DEFAULT_BREAK_LENGTH = 5;
const DEFAULT_SESSION_LENGTH = 25;

const initState: IStore = {
  breakLength: DEFAULT_BREAK_LENGTH,
  sessionLength: DEFAULT_SESSION_LENGTH,
  isPause: true,
  timer: DEFAULT_SESSION_LENGTH,
};

const checkLength = (prevTime: number, actionPayload: number): number => {
  const newTime = prevTime + actionPayload;
  return newTime > 60 ? 60 : newTime < 1 ? 1 : newTime;
};

const reducer = (state = initState, action: IAction): IStore => {
  switch (action.type) {
    case ActionName.SET_BREAK:
      return {
        ...state,
        breakLength: checkLength(state.breakLength, action.payload),
      };

    case ActionName.SET_SESSION:
      return {
        ...state,
        sessionLength: checkLength(state.sessionLength, action.payload),
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

export default reducer;

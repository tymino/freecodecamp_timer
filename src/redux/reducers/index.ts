import { ActionName, IStore, IAction } from '../../types/redux';

const initState: IStore = {
  breakLength: 5,
  sessionLength: 1,
  breakOrSession: false,
  isPause: false,
  timer: 1 * 60,
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

    case ActionName.SET_BREAKORSESSION:
      return {
        ...state,
        breakOrSession: !state.breakOrSession,
      };

    case ActionName.SET_TIMER:
      return {
        ...state,
        timer: state.timer - 1,
      };

    case ActionName.SET_PLAYPAUSE:
      return {
        ...state,
        isPause: !state.isPause,
      };

    case ActionName.SET_REFRESH:
      return {
        ...initState,
      };

    default:
      return state;
  }
};

export default reducer;

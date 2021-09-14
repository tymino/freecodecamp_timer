import { ActionName, IStore, IAction } from '../../types/redux';

const BREAK_LENGTH = 5;
const SESSION_LENGTH = 25;

const initState: IStore = {
  breakLength: BREAK_LENGTH,
  sessionLength: SESSION_LENGTH,
  isBreakTime: false,
  isPause: true,
  timer: SESSION_LENGTH * 60,
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
        timer: state.isBreakTime ? checkLength(state.breakLength, action.payload) * 60 : state.timer,
      };

    case ActionName.SET_SESSION:
      return {
        ...state,
        sessionLength: checkLength(state.sessionLength, action.payload),
        timer: state.isBreakTime ? state.timer : checkLength(state.sessionLength, action.payload) * 60,
      };

    case ActionName.SET_BREAKORSESSION:
      return {
        ...state,
        isBreakTime: !state.isBreakTime,
      };

    case ActionName.SET_TIMER: {
      const localNewTime = state.timer - 1;

      if (localNewTime < 1) {
        return {
          ...state,
          isBreakTime: !state.isBreakTime,
          timer: !state.isBreakTime ? state.breakLength * 60 : state.sessionLength * 60,
        };
      }

      return {
        ...state,
        timer: localNewTime,
      };
    }

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

export enum ActionName {
  SET_BREAK = 'SET_BREAK',
  SET_SESSION = 'SET_SESSION',
  SET_BREAKORSESSION = 'SET_BREAKORSESSION',
  SET_TIMER = 'SET_TIMER',
  SET_PLAYPAUSE = 'SET_PLAYPAUSE',
  SET_REFRESH = 'SET_REFRESH',
}

// store
export interface IStore {
  breakLength: number;
  sessionLength: number;
  isBreakTime: boolean;
  isPause: boolean;
  timer: number;
}

// reducers

// actions
interface ISetBreakAction {
  type: ActionName.SET_BREAK;
  payload: number;
}

interface ISetSessionAction {
  type: ActionName.SET_SESSION;
  payload: number;
}

interface ISetBreakOrSessionAction {
  type: ActionName.SET_BREAKORSESSION;
}

interface ISetTimerAction {
  type: ActionName.SET_TIMER;
}

interface ISetPlayPauseAction {
  type: ActionName.SET_PLAYPAUSE;
}

interface ISetRefreshAction {
  type: ActionName.SET_REFRESH;
}

export type IAction =
  | ISetBreakAction
  | ISetSessionAction
  | ISetBreakOrSessionAction
  | ISetTimerAction
  | ISetPlayPauseAction
  | ISetRefreshAction;

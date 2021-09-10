export enum ActionName {
  SET_BREAK = 'SET_BREAK',
  SET_SESSION = 'SET_SESSION',
  SET_PLAY = 'SET_PLAY',
  SET_PAUSE = 'SET_PAUSE',
  SET_REFRESH = 'SET_REFRESH',
}

// store
export interface IStore {
  breakLength: number;
  sessionLength: number;
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
interface ISetPlayAction {
  type: ActionName.SET_PLAY;
}
interface ISetPauseAction {
  type: ActionName.SET_PAUSE;
}
interface ISetRefreshAction {
  type: ActionName.SET_PAUSE;
}

export type IAction =
  | ISetBreakAction
  | ISetSessionAction
  | ISetPlayAction
  | ISetPauseAction
  | ISetRefreshAction;
import { ActionName, IAction } from '../../types/redux';

const setSession = (indeCrement: number): IAction => ({
  type: ActionName.SET_SESSION,
  payload: indeCrement,
});

export default setSession;

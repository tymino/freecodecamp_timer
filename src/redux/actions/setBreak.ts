import { ActionName, IAction } from '../../types/redux';

const setBreak = (indeCrement: number): IAction => ({
  type: ActionName.SET_BREAK,
  payload: indeCrement,
});

export default setBreak;

import { ActionName, IAction } from '../../types/redux';

const setTimer = (): IAction => ({
  type: ActionName.SET_TIMER,
});

export default setTimer;

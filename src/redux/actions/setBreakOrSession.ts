import { ActionName, IAction } from '../../types/redux';

const setBreakOrSession = (): IAction => ({
  type: ActionName.SET_BREAKORSESSION,
});

export default setBreakOrSession;
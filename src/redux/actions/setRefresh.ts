import { ActionName, IAction } from '../../types/redux';

const setRefresh = (): IAction => ({
  type: ActionName.SET_REFRESH,
});

export default setRefresh;

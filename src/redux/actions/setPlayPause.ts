import { ActionName, IAction } from '../../types/redux';

const setPlayPause = (): IAction => ({
  type: ActionName.SET_PLAYPAUSE,
});

export default setPlayPause;

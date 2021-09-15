import { ActionName, IAction } from '../../types/redux';

const playAudio = (): IAction => ({
  type: ActionName.PLAY_AUDIO,
});

export default playAudio;
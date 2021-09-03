import {
  CreatePlayerAction,
  CreatePlayerParams
} from '../../backend/types/player';
import { ActionTypes } from '../../backend/types/store';

export const createPlayerAction = (
  params: CreatePlayerParams
): CreatePlayerAction => ({
  type: ActionTypes.createPlayer,
  payload: params
});

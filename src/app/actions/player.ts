import { CreatePlayerAction, CreatePlayerPayload } from 'state/types/player';
import { ActionTypes } from 'state/types/store';

export const createPlayerAction = (
  params: CreatePlayerPayload
): CreatePlayerAction => ({
  type: ActionTypes.createPlayer,
  payload: params
});

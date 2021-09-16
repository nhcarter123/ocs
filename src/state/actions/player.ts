import {
  CreatePlayerAction,
  CreatePlayerPayload,
  DeletePlayerAction,
  DeletePlayerPayload
} from 'state/types/player';
import { ActionTypes } from 'state/types/store';

export const createPlayerAction = (
  params: CreatePlayerPayload
): CreatePlayerAction => ({
  type: ActionTypes.createPlayer,
  payload: params
});

export const deletePlayerAction = (
  params: DeletePlayerPayload
): DeletePlayerAction => ({
  type: ActionTypes.deletePlayer,
  payload: params
});

import {
  CreatePlayerAction,
  CreatePlayerPayload,
  DeletePlayerAction,
  DeletePlayerPayload,
  PlayerActionTypes
} from 'state/types/player';

export const createPlayerAction = (
  params: CreatePlayerPayload
): CreatePlayerAction => ({
  type: PlayerActionTypes.createPlayer,
  payload: params
});

export const deletePlayerAction = (
  params: DeletePlayerPayload
): DeletePlayerAction => ({
  type: PlayerActionTypes.deletePlayer,
  payload: params
});

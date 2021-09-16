import {
  CreatePlayerAction,
  CreatePlayerPayload,
  DeletePlayerAction,
  DeletePlayerPayload,
  PlayerActionTypes
} from 'state/types/player';

export default class PlayerActionsProvider {
  static create(params: CreatePlayerPayload): CreatePlayerAction {
    return {
      type: PlayerActionTypes.createPlayer,
      payload: params
    };
  }

  static delete(params: DeletePlayerPayload): DeletePlayerAction {
    return {
      type: PlayerActionTypes.deletePlayer,
      payload: params
    };
  }
}

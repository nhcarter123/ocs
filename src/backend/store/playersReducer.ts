import PlayerService from 'backend/services/playerService';
import { ActionTypes, CustomAction, StateSchema } from 'backend/types/store';

const defaultState = {
  players: []
};

export default (
  state: StateSchema = defaultState,
  action: CustomAction
): StateSchema => {
  if (!action.payload) {
    return state;
  }

  switch (action.type) {
    case ActionTypes.createPlayer:
      return PlayerService.create({ state, payload: action.payload });
    case ActionTypes.deletePlayer:
      return PlayerService.delete({ state, payload: action.payload });
    case ActionTypes.updateRating:
      return PlayerService.updateRating({ state, payload: action.payload });
    default:
      return state;
  }
};

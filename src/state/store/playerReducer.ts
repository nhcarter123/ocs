import PlayerService from 'state/services/playerService';
import { ActionTypes, CustomAction } from 'state/types/store';
import { Player } from 'state/types/player';

export default (state: Player[] = [], action: CustomAction): Player[] => {
  if (!action.payload) {
    return state;
  }

  switch (action.type) {
    case ActionTypes.createPlayer:
      return PlayerService.create({ players: state, payload: action.payload });
    case ActionTypes.deletePlayer:
      return PlayerService.delete({ players: state, payload: action.payload });
    case ActionTypes.updateRating:
      return PlayerService.updateRating({
        players: state,
        payload: action.payload
      });
    default:
      return state;
  }
};

import PlayerService from 'state/services/playerService';
import { PlayerActionTypes, Player, PlayerAction } from 'state/types/player';
import { wrapWithSnackbar } from 'state/helpers/wrapWithSnackbar';

export default (players: Player[] = [], action: PlayerAction): Player[] => {
  if (!action.payload) {
    return players;
  }

  let fn;
  let args;
  let description;

  switch (action.type) {
    case PlayerActionTypes.createPlayer:
      fn = PlayerService.create;
      args = { players, payload: action.payload };
      description = 'Player added successfully';
      break;
    case PlayerActionTypes.deletePlayer:
      fn = PlayerService.delete;
      args = { players, payload: action.payload };
      description = 'Player deleted successfully';
      break;
    case PlayerActionTypes.updateRating:
      fn = PlayerService.update;
      args = { players, payload: action.payload };
      description = 'Player updated successfully';
      break;
    default:
      return players;
  }

  return wrapWithSnackbar<typeof fn, ArgumentTypes<typeof fn>>(
    fn,
    args,
    description
  );
};

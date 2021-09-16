import PlayerService from 'state/services/playerService';
import { ActionTypes, CustomAction } from 'state/types/store';
import { Player } from 'state/types/player';
import { wrapWithSnackbar } from 'state/helpers/wrapWithSnackbar';

export default (state: Player[] = [], action: CustomAction): Player[] => {
  if (!action.payload) {
    return state;
  }

  let fn;
  let args;
  let description;

  switch (action.type) {
    case ActionTypes.createPlayer:
      fn = PlayerService.create;
      args = { players: state, payload: action.payload };
      description = 'Player added successfully';
      break;
    case ActionTypes.deletePlayer:
      fn = PlayerService.delete;
      args = { players: state, payload: action.payload };
      description = 'Player deleted successfully';
      break;
    case ActionTypes.updateRating:
      fn = PlayerService.update;
      args = { players: state, payload: action.payload };
      description = 'Player updated successfully';
      break;
    default:
      return state;
  }

  return wrapWithSnackbar<typeof fn, ArgumentTypes<typeof fn>>(
    fn,
    args,
    description
  );
};

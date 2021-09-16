import TournamentService from 'state/services/tournamentService';
import {
  TournamentActionTypes,
  Tournament,
  TournamentAction
} from 'state/types/tournament';
import { wrapWithSnackbar } from 'state/helpers/wrapWithSnackbar';

export default (
  tournaments: Tournament[] = [],
  action: TournamentAction
): Tournament[] => {
  if (!action.payload) {
    return tournaments;
  }

  let fn;
  let args;
  let description;

  switch (action.type) {
    case TournamentActionTypes.createTournament:
      fn = TournamentService.create;
      args = { tournaments, payload: action.payload };
      description = 'Tournament added successfully';
      break;
    case TournamentActionTypes.deleteTournament:
      fn = TournamentService.delete;
      args = { tournaments, payload: action.payload };
      description = 'Tournament deleted successfully';
      break;
    default:
      return tournaments;
  }

  return wrapWithSnackbar<typeof fn, ArgumentTypes<typeof fn>>(
    fn,
    args,
    description
  );
};

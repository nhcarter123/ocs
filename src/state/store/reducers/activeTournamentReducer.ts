import {
  TournamentActionTypes,
  ActiveTournamentAction
} from 'state/types/activeTournament';

export default (
  activeTournament: Nullable<string> = null,
  action: ActiveTournamentAction
): Nullable<string> => {
  if (!action.payload) {
    return activeTournament;
  }

  switch (action.type) {
    case TournamentActionTypes.setActiveTournament:
      return action.payload.id;
    case TournamentActionTypes.unsetActiveTournament:
      return null;
    default:
      return activeTournament;
  }
};

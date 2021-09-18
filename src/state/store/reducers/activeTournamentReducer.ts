import {
  ActiveTournamentActionTypes,
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
    case ActiveTournamentActionTypes.setActiveTournament:
      return action.payload.id;
    case ActiveTournamentActionTypes.unsetActiveTournament:
      return null;
    default:
      return activeTournament;
  }
};

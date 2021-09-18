import {
  SetActiveTournamentAction,
  SetActiveTournamentPayload,
  UnsetActiveTournamentAction,
  UnsetActiveTournamentPayload,
  ActiveTournamentActionTypes
} from 'state/types/activeTournament';

export default class ActiveTournamentActionsProvider {
  static set(params: SetActiveTournamentPayload): SetActiveTournamentAction {
    return {
      type: ActiveTournamentActionTypes.setActiveTournament,
      payload: params
    };
  }

  static unset(
    params: UnsetActiveTournamentPayload
  ): UnsetActiveTournamentAction {
    return {
      type: ActiveTournamentActionTypes.unsetActiveTournament,
      payload: params
    };
  }
}

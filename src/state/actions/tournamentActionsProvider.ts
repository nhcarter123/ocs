import {
  CreateTournamentAction,
  CreateTournamentPayload,
  DeleteTournamentAction,
  DeleteTournamentPayload,
  TournamentActionTypes
} from 'state/types/tournament';

export default class TournamentActionsProvider {
  static create(params: CreateTournamentPayload): CreateTournamentAction {
    return {
      type: TournamentActionTypes.createTournament,
      payload: params
    };
  }

  static delete(params: DeleteTournamentPayload): DeleteTournamentAction {
    return {
      type: TournamentActionTypes.deleteTournament,
      payload: params
    };
  }
}

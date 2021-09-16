export type SetActiveTournamentPayload = {
  id: string;
};

export type UnsetActiveTournamentPayload = {};

export type SetActiveTournamentAction = {
  type: TournamentActionTypes.setActiveTournament;
  payload?: SetActiveTournamentPayload;
};

export type UnsetActiveTournamentAction = {
  type: TournamentActionTypes.unsetActiveTournament;
  payload?: UnsetActiveTournamentPayload;
};

export enum TournamentActionTypes {
  setActiveTournament = 'setActiveTournament',
  unsetActiveTournament = 'unsetActiveTournament'
}

export type ActiveTournamentAction =
  | SetActiveTournamentAction
  | UnsetActiveTournamentAction;

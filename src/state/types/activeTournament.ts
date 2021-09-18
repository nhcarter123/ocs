export type SetActiveTournamentPayload = {
  id: string;
};

export type UnsetActiveTournamentPayload = {};

export type SetActiveTournamentAction = {
  type: ActiveTournamentActionTypes.setActiveTournament;
  payload?: SetActiveTournamentPayload;
};

export type UnsetActiveTournamentAction = {
  type: ActiveTournamentActionTypes.unsetActiveTournament;
  payload?: UnsetActiveTournamentPayload;
};

export enum ActiveTournamentActionTypes {
  setActiveTournament = 'setActiveTournament',
  unsetActiveTournament = 'unsetActiveTournament'
}

export type ActiveTournamentAction =
  | SetActiveTournamentAction
  | UnsetActiveTournamentAction;

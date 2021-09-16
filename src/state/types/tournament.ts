export type Tournament = {
  id: string;
  name: string;
  description?: string;
  pools: Pool[];
  date: Date;
  playerCount?: number;
  maxRating?: number;
  avgRating?: number;
};

export type Pool = {
  players: string[];
};

export type CreateTournamentPayload = {
  name: string;
  date: Date;
  description?: string;
};

export type DeleteTournamentPayload = {
  id: string;
};

export type CreateTournamentAction = {
  type: TournamentActionTypes.createTournament;
  payload?: CreateTournamentPayload;
};

export type DeleteTournamentAction = {
  type: TournamentActionTypes.deleteTournament;
  payload?: DeleteTournamentPayload;
};

export type CreateParams = {
  tournaments: Tournament[];
  payload: CreateTournamentPayload;
};

export type DeleteParams = {
  tournaments: Tournament[];
  payload: DeleteTournamentPayload;
};

export enum TournamentActionTypes {
  createTournament = 'createTournament',
  deleteTournament = 'deleteTournament'
}

export type TournamentAction = CreateTournamentAction | DeleteTournamentAction;

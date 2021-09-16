export type Player = {
  id: string;
  firstName: string;
  lastName: string;
  rating: number;
  matches: number;
};

export type CreatePlayerPayload = {
  firstName: string;
  lastName: string;
  rating: number;
};

export type DeletePlayerPayload = {
  id: string;
};

export type UpdateRatingPayload = {
  id: string;
  rating: number;
};

export type CreatePlayerAction = {
  type: PlayerActionTypes.createPlayer;
  payload?: CreatePlayerPayload;
};

export type DeletePlayerAction = {
  type: PlayerActionTypes.deletePlayer;
  payload?: DeletePlayerPayload;
};

export type UpdatePlayerRatingAction = {
  type: PlayerActionTypes.updateRating;
  payload?: UpdateRatingPayload;
};

export type CreateParams = {
  players: Player[];
  payload: CreatePlayerPayload;
};

export type DeleteParams = {
  players: Player[];
  payload: DeletePlayerPayload;
};

export type UpdateParams = {
  players: Player[];
  payload: Partial<Player>;
};

export enum PlayerActionTypes {
  createPlayer = 'createPlayer',
  updateRating = 'updateRating',
  deletePlayer = 'deletePlayer'
}

export type PlayerAction =
  | CreatePlayerAction
  | UpdatePlayerRatingAction
  | DeletePlayerAction;

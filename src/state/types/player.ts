import { ActionTypes } from 'state/types/store';

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
  type: ActionTypes.createPlayer;
  payload?: CreatePlayerPayload;
};

export type DeletePlayerAction = {
  type: ActionTypes.deletePlayer;
  payload?: DeletePlayerPayload;
};

export type UpdatePlayerRatingAction = {
  type: ActionTypes.updateRating;
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

export type UpdateRatingParams = {
  players: Player[];
  payload: UpdateRatingPayload;
};

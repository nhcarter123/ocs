import { ActionTypes } from 'state/types/store';

export type Player = {
  id: string;
  firstName: string;
  lastName: string;
  rating: number;
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

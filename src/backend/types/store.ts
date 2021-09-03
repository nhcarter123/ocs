import {
  Player,
  CreatePlayerAction,
  DeletePlayerAction,
  UpdatePlayerRatingAction
} from 'backend/types/player';

export type StateSchema = {
  players: Player[];
};

export enum ActionTypes {
  deletePlayer = 'deletePlayer',
  createPlayer = 'createPlayer',
  updateRating = 'updateRating'
}

export type CustomAction =
  | CreatePlayerAction
  | UpdatePlayerRatingAction
  | DeletePlayerAction;

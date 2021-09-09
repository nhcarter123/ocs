import HashService from 'state/services/hashService';
import {
  CreatePlayerPayload,
  DeletePlayerPayload,
  Player,
  UpdateRatingPayload
} from 'state/types/player';

type CreateParams = {
  players: Player[];
  payload: CreatePlayerPayload;
};

type DeleteParams = {
  players: Player[];
  payload: DeletePlayerPayload;
};

type UpdateRatingParams = {
  players: Player[];
  payload: UpdateRatingPayload;
};

export default class PlayerService {
  static create(params: CreateParams): Player[] {
    const id = HashService.generate();

    return [...params.players, { id, ...params.payload }];
  }

  static delete(params: DeleteParams): Player[] {
    return params.players.filter((player) => player.id !== params.payload.id);
  }

  static updateRating(params: UpdateRatingParams): Player[] {
    return params.players.map((player) =>
      player.id === params.payload.id
        ? {
            ...player,
            rating: params.payload.rating
          }
        : player
    );
  }
}

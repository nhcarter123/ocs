import HashService from 'state/services/hashService';
import {
  Player,
  CreateParams,
  DeleteParams,
  UpdateRatingParams
} from 'state/types/player';

export default class PlayerService {
  static create(params: CreateParams): Player[] {
    const id = HashService.generate();

    return [...params.players, { id, matches: 0, ...params.payload }];
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

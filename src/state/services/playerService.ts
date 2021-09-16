import HashService from 'state/services/hashService';
import {
  Player,
  CreateParams,
  DeleteParams,
  UpdateParams
} from 'state/types/player';

export default class PlayerService {
  static create(params: CreateParams): Player[] {
    const id = HashService.generate();

    if (
      params.players.some(
        (player) =>
          player.firstName === params.payload.firstName &&
          player.lastName === params.payload.lastName &&
          player.rating === params.payload.rating
      )
    ) {
      throw new Error('Player already added');
    }

    return [...params.players, { id, matches: 0, ...params.payload }];
  }

  static delete(params: DeleteParams): Player[] {
    return params.players.filter((player) => player.id !== params.payload.id);
  }

  static update(params: UpdateParams): Player[] {
    return params.players.map((player) =>
      player.id === params.payload.id
        ? {
            ...params.payload,
            ...player
          }
        : player
    );
  }
}

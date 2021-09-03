import { StateSchema } from 'backend/types/store';
import HashService from 'backend/services/hashService';
import {
  CreatePlayerPayload,
  DeletePlayerPayload,
  UpdateRatingPayload
} from 'backend/types/player';

type CreateParams = {
  state: StateSchema;
  payload: CreatePlayerPayload;
};

type DeleteParams = {
  state: StateSchema;
  payload: DeletePlayerPayload;
};

type UpdateRatingParams = {
  state: StateSchema;
  payload: UpdateRatingPayload;
};

export default class PlayerService {
  static create(params: CreateParams): StateSchema {
    const id = HashService.generate();

    return {
      ...params.state,
      players: [...params.state.players, { id, ...params.payload }]
    };
  }

  static delete(params: DeleteParams): StateSchema {
    return {
      ...params.state,
      players: params.state.players.filter(
        (player) => player.id !== params.payload.id
      )
    };
  }

  static updateRating(params: UpdateRatingParams): StateSchema {
    return {
      ...params.state,
      players: params.state.players.map((player) =>
        player.id === params.payload.id
          ? {
              ...player,
              rating: params.payload.rating
            }
          : player
      )
    };
  }
}

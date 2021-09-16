import HashService from 'state/services/hashService';
import { Tournament, CreateParams, DeleteParams } from 'state/types/tournament';

export default class TournamentService {
  static create(params: CreateParams): Tournament[] {
    const id = HashService.generate();

    if (
      params.tournaments.some(
        (tournament) => tournament.name === params.payload.name
      )
    ) {
      throw new Error('Tournament already added');
    }

    return [...params.tournaments, { id, pools: [], ...params.payload }];
  }

  static delete(params: DeleteParams): Tournament[] {
    return params.tournaments.filter(
      (tournament) => tournament.id !== params.payload.id
    );
  }
}

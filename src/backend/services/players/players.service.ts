import Database from 'backend/database/database';
import { Player } from 'backend/types/player';
import HashService from '../hash.service';
import { writeStorage } from '@rehooks/local-storage';

type AddPlayerParams = {
  firstName: string;
  lastName: string;
  rating: number;
};

export default class PlayersService {
  static find(query: Partial<Player>): Player {
    return Database.getChain().get('players').find(query).value();
  }

  static async create(params: AddPlayerParams): Promise<Maybe<Player>> {
    const db = Database.getDb();

    if (db.data) {
      const id = await HashService.generate();
      const player = { id, ...params };

      db.data.players = [...db.data.players, player];
      writeStorage('players', player);

      return player;
    }
  }
}

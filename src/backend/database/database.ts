import { LowSync, LocalStorage } from 'lowdb/lib';
import { DBSchema } from 'backend/types/database';
import { chain, ObjectChain } from 'lodash';

let db: LowSync<DBSchema>;

export default class Database {
  static init(): void {
    const dbName = process.env.DB_NAME || 'not_test';
    db = new LowSync(new LocalStorage(dbName));

    Database.initDefaults();
  }

  private static initDefaults(): void {
    if (!db.data) {
      db.data = {
        players: []
      };
    }
  }

  static getChain(): ObjectChain<DBSchema> {
    return chain(db.data);
  }

  static getDb(): LowSync<DBSchema> {
    return db;
  }
}

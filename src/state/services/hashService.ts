import * as shortid from 'shortid';

export default class HashService {
  static generate(): string {
    return shortid.generate();
  }
}

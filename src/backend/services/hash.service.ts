import { customAlphabet } from 'nanoid/async';

export default class HashService {
  static generate(): Promise<string> {
    const nanoid = customAlphabet(
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz',
      8
    );

    return nanoid();
  }
}

import { Player } from 'state/types/player';
import { Tournament } from 'state/types/tournament';

export type StateSchema = {
  players: Player[];
  tournaments: Tournament[];
};

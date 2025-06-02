import { Guess } from 'src/game/interfaces/guess.interface';
import { GameState } from './game-state.interface';

export interface GuessResult extends GameState {
  guessedTeammateId: string;
  isCorrect: boolean;
}

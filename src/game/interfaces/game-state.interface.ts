import { HeadshotDto } from 'src/teammates/dtos/teammate.dto';
import { GameMode } from '../dtos/game-mode.enum';

export interface GameState {
  id: string;
  score: number;
  teamMateNameToGuess: string;
  headshots: HeadshotDto[];
  isGameOver: boolean;
  gameMode: GameMode;
  startTime: Date;
  endTime: Date;
}

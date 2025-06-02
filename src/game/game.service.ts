import { Injectable } from '@nestjs/common';
import { TeammatesService } from 'src/teammates/teammates.service';
import { GameStateDto } from './dtos/game-state.dto';
import { GameState } from './interfaces/game-state.interface';
import { Guess } from 'src/game/interfaces/guess.interface';
import { GameMode } from './dtos/game-mode.enum';

@Injectable()
export class GameService {
  constructor(private readonly teammatesService: TeammatesService) {}

  async guessTeammate({ gameId, teammateId }: Guess): Promise<GameState> {
    throw new Error('Method not implemented.');
  }

  startGame(gameMode: GameMode): Promise<GameState> {
    throw new Error('Method not implemented.');
  }

  async getGameState(gameId: string): Promise<GameState> {
    throw new Error('Method not implemented.');
  }
}

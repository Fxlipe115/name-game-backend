import { Inject, Injectable } from '@nestjs/common';
import { TeammatesService } from 'src/teammates/teammates.service';
import { GameState } from './interfaces/game-state.interface';
import { Guess } from 'src/game/interfaces/guess.interface';
import { GameMode } from './dtos/game-mode.enum';
import { GameRepository } from './repositories/game.repository.interface';

@Injectable()
export class GameService {
  constructor(
    private readonly teammatesService: TeammatesService,
    @Inject(GameRepository) private readonly gameRepository: GameRepository,
  ) {}

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

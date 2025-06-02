import { GameState } from '../interfaces/game-state.interface';

export interface GameRepository {
  getById(id: string): Promise<GameState | null>;
  save(gameState: GameState): Promise<GameState>;
  delete(id: string): Promise<void>;
}

export const GameRepository = Symbol('GameRepository');

import { GameState } from '../interfaces/game-state.interface';
import { GameRepository } from './game.repository.interface';

export class InMemoryGameRepository implements GameRepository {
  private games: Map<string, GameState> = new Map();

  async getById(id: string): Promise<GameState | null> {
    return this.games.get(id) ?? null;
  }

  async save(gameState: GameState): Promise<GameState> {
    this.games.set(gameState.id, { ...gameState });
    return { ...gameState };
  }

  async delete(id: string): Promise<void> {
    this.games.delete(id);
  }
}

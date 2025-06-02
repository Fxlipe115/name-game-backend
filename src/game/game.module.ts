import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { TeammatesService } from 'src/teammates/teammates.service';
import { GameRepository } from './repositories/game.repository.interface';
import { InMemoryGameRepository } from './repositories/in-memory-game.repository';

@Module({
  controllers: [GameController],
  providers: [
    GameService,
    TeammatesService,
    {
      provide: GameRepository,
      useClass: InMemoryGameRepository,
    },
  ],
})
export class GameModule {}

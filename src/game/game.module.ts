import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { TeammatesModule } from 'src/teammates/teammates.module';
import { TeammatesService } from 'src/teammates/teammates.service';

@Module({
  controllers: [GameController],
  providers: [GameService, TeammatesService],
})
export class GameModule {}

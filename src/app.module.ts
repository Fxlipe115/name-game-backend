import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeammatesModule } from './teammates/teammates.module';
import { GameModule } from './game/game.module';

@Module({
  imports: [TeammatesModule, GameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

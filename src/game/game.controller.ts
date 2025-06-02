import { Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { GameStateDto } from './dtos/game-state.dto';
import { GameService } from './game.service';
import { GameState } from './interfaces/game-state.interface';
import { Guess } from 'src/game/interfaces/guess.interface';
import { GuessDto } from 'src/game/dtos/guess.dto';
import { GameMode } from './dtos/game-mode.enum';
import { GuessResultDto } from './dtos/guess-result.dto';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Starts a new game and returns the initial game state',
    type: GameStateDto,
  })
  async startGame(@Param('game-mode') gameMode: GameMode): Promise<GameState> {
    return this.gameService.startGame(gameMode);
  }

  @Get(':game_id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Returns the current game state',
    type: GameStateDto,
  })
  async getGameState(@Param('game_id') gameId: string): Promise<GameState> {
    return this.gameService.getGameState(gameId);
  }

  @Post('/guess')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Guesses a teammate and returns the updated game state',
    type: GuessResultDto,
  })
  async guessTeammate(@Param() params: GuessDto): Promise<GameState> {
    return this.gameService.guessTeammate(params);
  }
}

import { HeadshotDto, TeamMateDto } from 'src/teammates/dtos/teammate.dto';
import { GameState } from '../interfaces/game-state.interface';
import { GameMode } from './game-mode.enum';
import { ApiProperty } from '@nestjs/swagger';

export class GameStateDto implements GameState {
  @ApiProperty({
    description: 'Unique identifier for the game state',
    example: '12345',
  })
  id: string;

  @ApiProperty({
    description: 'Current score of the game',
    example: 100,
  })
  score: number;

  @ApiProperty({
    description: 'Name of the teammate to guess in this round',
    example: 'John Doe',
  })
  teamMateNameToGuess: string;

  @ApiProperty({
    description: 'List of headshots available for guessing',
    type: [HeadshotDto],
  })
  headshots: HeadshotDto[];

  @ApiProperty({
    description: 'Indicates if the game is over',
    example: false,
  })
  isGameOver: boolean;

  @ApiProperty({
    description: 'Current game mode',
    enum: GameMode,
  })
  gameMode: GameMode;

  @ApiProperty({
    description: 'Start time of the game',
    type: Date,
  })
  startTime: Date;

  @ApiProperty({
    description: 'End time of the game',
    type: Date,
  })
  endTime: Date;
}

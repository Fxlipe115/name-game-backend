import { GuessDto } from 'src/game/dtos/guess.dto';
import { GuessResult } from '../interfaces/guess-result.interface';
import { ApiProperty } from '@nestjs/swagger';
import { GameStateDto } from './game-state.dto';

export class GuessResultDto extends GameStateDto implements GuessResult {
  @ApiProperty({
    description: 'Unique identifier for the guessed teammate',
    example: '12345',
  })
  guessedTeammateId: string;

  @ApiProperty({
    description: 'Indicates if the guess was correct',
    example: true,
  })
  isCorrect: boolean;
}

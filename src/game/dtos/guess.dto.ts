import { ApiProperty } from '@nestjs/swagger';
import { Guess } from '../interfaces/guess.interface';

export class GuessDto implements Guess {
  @ApiProperty({
    description: 'Unique identifier for the game',
    example: '12345',
  })
  gameId: string;

  @ApiProperty({
    description: 'Unique identifier for the teammate being guessed',
    example: '12345',
  })
  teammateId: string;
}

import { Controller, Get, HttpStatus } from '@nestjs/common';
import { TeammatesService } from './teammates.service';
import { TeamMateDto } from './dtos/teammate.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('teammates')
export class TeammatesController {
  constructor(private readonly teammatesService: TeammatesService) {}

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Game started successfully. Returns the initial game state.',
    type: [TeamMateDto],
  })
  getTeammates(): Promise<TeamMateDto[]> {
    return this.teammatesService.getTeammates();
  }
}

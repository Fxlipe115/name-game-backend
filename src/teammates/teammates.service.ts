import { Injectable } from '@nestjs/common';
import { TeamMateDto } from './dtos/teammate.dto';
import axios from 'axios';

@Injectable()
export class TeammatesService {
  private readonly API_URL =
    'https://namegame.willowtreeapps.com/api/v1.0/profiles';

  async getTeammates(): Promise<TeamMateDto[]> {
    try {
      const response = await axios.get<TeamMateDto[]>(this.API_URL);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch teammates:', error);
      throw new Error('Could not retrieve teammate data.');
    }
  }
}

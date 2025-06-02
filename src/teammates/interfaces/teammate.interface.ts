import { ApiProperty } from '@nestjs/swagger';

export interface Headshot {
  alt: string;
  height: number;
  id: string;
  mimeType: string;
  type: string;
  url: string;
  width: number;
}

export class TeamMate {
  id: string;
  firstName: string;
  lastName: string;
  headshot: Headshot;
  jobTitle: string;
  socialLinks: string[];
  slug: string;
  type: string;
}

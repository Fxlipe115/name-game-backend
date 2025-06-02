import { ApiProperty } from '@nestjs/swagger';
import { Headshot, TeamMate } from '../interfaces/teammate.interface';

export class HeadshotDto implements Headshot {
  @ApiProperty({
    description: 'alt text for the headshot image',
    example: 'Headshot of John Doe',
  })
  alt: string;

  @ApiProperty({
    description: 'height of the headshot image',
    example: 200,
  })
  height: number;

  @ApiProperty({
    description: 'Unique identifier for the headshot image',
    example: '12345',
  })
  id: string;

  @ApiProperty({
    description: 'MIME type of the headshot image',
    example: 'image/jpeg',
  })
  mimeType: string;

  @ApiProperty({
    description: 'Type of the object, typically "image"',
    example: 'image',
  })
  type: string;

  @ApiProperty({
    description: 'URL of the headshot image',
    example: 'https://example.com/headshot.jpg',
  })
  url: string;

  @ApiProperty({
    description: 'Width of the headshot image',
    example: 200,
  })
  width: number;
}

export class TeamMateDto implements TeamMate {
  @ApiProperty({
    description: 'Unique identifier for the teammate',
    example: '12345',
  })
  id: string;

  @ApiProperty({
    description: 'First name of the teammate',
    example: 'John',
  })
  firstName: string;

  @ApiProperty({
    description: 'Last name of the teammate',
    example: 'Doe',
  })
  lastName: string;

  @ApiProperty({
    description: 'Headshot of the teammate',
    type: HeadshotDto,
  })
  headshot: HeadshotDto;

  @ApiProperty({
    description: 'Job title of the teammate',
    example: 'Software Engineer',
  })
  jobTitle: string;

  @ApiProperty({
    description: 'List of social links for the teammate',
    type: [String],
    example: ['https://twitter.com/johndoe', 'https://linkedin.com/in/johndoe'],
  })
  socialLinks: string[];

  @ApiProperty({
    description: 'Unique slug for the teammate',
    example: 'john-doe',
  })
  slug: string;

  @ApiProperty({
    description: 'Type of the object, typically "person"',
    example: 'person',
  })
  type: string;
}

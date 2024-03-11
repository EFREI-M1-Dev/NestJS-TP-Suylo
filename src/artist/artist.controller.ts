import { Controller, Get, Param, Query } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { Artist } from './artist.interface';

@Controller()
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get('artists')
  getArtists(): Artist[] {
    return this.artistService.findAll();
  }

  @Get('artists/:id')
  findArtistById(@Param('id') id: string): Artist | null {
    return this.artistService.findById(parseInt(id));
  }

  @Get('artist')
  findArtistByNickname(@Query('name') nickName: string): Artist {
    return this.artistService.findByNickName(nickName);
  }

  @Get('artist')
  findArtistByFirstname(@Query('firstName') firstName: string): Artist {
    return this.artistService.findByFirstName(firstName);
  }
}

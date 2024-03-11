import { Controller, Get, Query } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { Artist } from './artist.interface';

@Controller()
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get('artists')
  getArtists(): Artist[] {
    return this.artistService.findAll();
  }

  @Get('artist/:id')
  getArtistById(id: number): Artist {
    return this.artistService.findById(id);
  }

  @Get('artist')
  getArtistByNickName(@Query('name') nickName: string): Artist {
    return this.artistService.findByNickName(nickName);
  }

  @Get('artist')
  getArtistByFirstName(@Query('firstName') firstName: string): Artist {
    return this.artistService.findByFirstName(firstName);
  }
}

import { Controller, Delete, Get, Post } from '@nestjs/common';
import { ArtworkService } from './artwork.service';

@Controller()
export class ArtworkController {
  constructor(private readonly artworkService: ArtworkService) {}

  @Get('artworks')
  findAll() {
    return this.artworkService.findAllWithArtists();
  }

  @Get('artworks/:id')
  findArtworkById(id: number) {
    return this.artworkService.findById(id);
  }

  @Post('artworks')
  newArtwork(name: string, date: string, artistId: number) {
    return this.artworkService.newArtwork(name, date, artistId);
  }

  @Delete('artworks/:id')
  deleteArtwork(id: number) {
    return this.artworkService.deleteArtwork(id);
  }
}

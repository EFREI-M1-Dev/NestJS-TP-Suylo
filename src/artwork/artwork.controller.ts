import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ArtworkService } from './artwork.service';
import { Artwork } from './artwork.interface';

@Controller()
export class ArtworkController {
  constructor(private readonly artworkService: ArtworkService) {}

  @Get('artworks')
  findAll() {
    return this.artworkService.findAllWithArtists();
  }

  @Get('artworks/:id')
  findArtworkById(@Param('id') id: string): Artwork | null {
    return this.artworkService.findById(parseInt(id));
  }

  @Post('artworks')
  newArtwork(@Body() artData: any) {
    const { name, date, artistId } = artData;
    const artworks = this.artworkService.findAll();
    const maxId = Math.max(...artworks.map((artwork) => artwork.getId()));
    const newArtwork = new Artwork(maxId + 1, name, date, artistId);
    this.artworkService.newArtwork(newArtwork);
    return newArtwork;
  }

  @Delete('artworks/:id')
  deleteArtwork(@Param('id') id: string) {
    return this.artworkService.deleteArtwork(parseInt(id));
  }
}

import { Injectable } from '@nestjs/common';
import { Artwork } from './artwork.interface';
import { findArtistById } from '../artist/artist.service';

@Injectable()
export class ArtworkService {
  private artworks: Artwork[] = [
    new Artwork(1, 'Guernica', '1937', 1),
    new Artwork(2, 'Les Demoiselles d’Avignon', '1907', 1),
    new Artwork(3, 'Starry Night', '1889', 2),
    new Artwork(4, 'The Last Supper', '1495', 3),
    new Artwork(5, 'Mona Lisa', '1503', 3),
  ];

  findAll(): Artwork[] {
    return this.artworks;
  }

  findAllWithArtists() {
    const artworks = this.findAll();

    return artworks.map((artwork) => {
      const artist = findArtistById(artwork.getArtistId());
      return {
        id: artwork.getId(),
        name: artwork.getName(),
        date: artwork.getDate(),
        artist: artist,
      };
    });
  }

  findById(id: number): Artwork {
    return this.findAll().find((artist) => artist.getId() === id);
  }

  newArtwork(name: string, date: string, artistId: number): Artwork {
    const id = this.findAll().length + 1;
    const artwork = new Artwork(id, name, date, artistId);
    this.findAll().push(artwork);
    return artwork;
  }

  deleteArtwork(id: number): Artwork[] {
    const artworks = this.findAll();
    const index = artworks.findIndex((artwork) => artwork.getId() === id);
    if (index !== -1) {
      artworks.splice(index, 1);
    }
    return artworks;
  }
}

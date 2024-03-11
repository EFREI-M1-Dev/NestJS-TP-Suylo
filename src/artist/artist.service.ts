import { Injectable } from '@nestjs/common';
import { Artist } from './artist.interface';

@Injectable()
export class ArtistService {
  findAll(): Artist[] {
    return [
      new Artist(1, 'Pablo', 'Picasso', 'Poovi Art', '', [
        'https://fr.wikipedia.org/wiki/Pablo_Escobar',
        'https://www.riseart.com',
      ]),
      new Artist(2, 'Vincent', 'Van Gogh', 'VGVG', '', [
        'https://fr.wikipedia.org/wiki/Vincent_van_Gogh',
        'https://www.riseart.com',
      ]),
      new Artist(3, 'Leonardo', 'Da Vinci', 'LDV', '', [
        'https://fr.wikipedia.org/wiki/L%C3%A9onard_de_Vinci',
      ]),
      new Artist(4, 'Michelangelo', 'Buonarroti', 'MB', '', [
        'https://fr.wikipedia.org/wiki/Michel-Ange',
        'https://www.riseart.com',
      ]),
    ];
  }

  findById(id: number): Artist {
    return this.findAll().find((artist) => artist.getId() === id);
  }

  findByNickName(nickName: string): Artist {
    return this.findAll().find((artist) =>
      artist.getNickName().includes(nickName),
    );
  }

  findByFirstName(firstName: string): Artist {
    return this.findAll().find((artist) =>
      artist.getFirstName().includes(firstName),
    );
  }
}

export function findArtistById(id: number): Artist {
  const artistService = new ArtistService();
  return artistService.findById(id);
}

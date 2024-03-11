export class Artwork {
  private readonly id: number;
  private readonly name: string;
  private readonly date: string;
  private readonly artistId?: number;

  constructor(id: number, name: string, date: string, artistId: number) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.artistId = artistId;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDate(): string {
    return this.date;
  }

  getArtistId(): number {
    return this.artistId;
  }
}

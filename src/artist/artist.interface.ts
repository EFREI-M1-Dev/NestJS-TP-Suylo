export class Artist {
  private readonly id: number;
  private readonly firstName: string;
  private readonly lastName: string;
  private readonly nickName: string;
  private readonly desc?: string;
  private readonly link: string[];

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    nickName: string,
    desc: string,
    link: string[],
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickName = nickName;
    this.desc = desc;
    this.link = link;
  }

  getId(): number {
    return this.id;
  }

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getNickName(): string {
    return this.nickName;
  }

  getDesc(): string {
    return this.desc;
  }

  getLink(): string[] {
    return this.link;
  }
}

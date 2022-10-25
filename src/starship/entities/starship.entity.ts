import { Column, Entity } from 'typeorm';

@Entity({ name: 'starship' })
export class Starship {
  @Column()
  name: string;

  @Column()
  speed: number;

  @Column()
  kilometerPrice: number;
}

import { Column, Entity } from 'typeorm';

@Entity({ name: 'planet' })
export class Planet {
  @Column()
  name: string;

  @Column()
  distanceToEarth: number;
}

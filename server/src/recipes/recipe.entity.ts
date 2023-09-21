import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('text', { array: true })
  categories: string[];

  @Column('text', { array: true })
  ingredients: string[];

  @Column('text', { array: true })
  instructions: string[];

  @Column('text', { array: true })
  comments: string[];
}

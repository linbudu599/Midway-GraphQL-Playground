import { EntityModel } from '../lib/orm';
import { PrimaryGeneratedColumn, Column } from 'typeorm';

@EntityModel()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

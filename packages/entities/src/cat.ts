import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  constructor(firstName: string) {
    this.firstName = firstName;
  }
}
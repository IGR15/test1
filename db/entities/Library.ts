import { BaseEntity, Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Book } from "./Book.js"
@Entity('library')
export class Library extends BaseEntity {
  @PrimaryGeneratedColumn('increment') 

  id: number;
  @Column({length: 255,nullable:false})
  name: string;
  @ManyToMany(() => Book, (book) => book.libraries)
  books: Book[];





}
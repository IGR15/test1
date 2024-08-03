import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Author } from "./Author.js";
import { Library } from "./Library.js";

@Entity("book")
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column({ length: 255, nullable: false })
    bookName: string;

    @ManyToOne(()=>Author,author=>author.books)
    author: Author
    @ManyToMany(()=>Library,library=>library.books)
    @JoinTable({
        name: "book_library" 
    })
    libraries: Library[];
}
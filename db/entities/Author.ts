import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Book } from "./Book.js"
import { Address } from "./Address.js";
import { JoinColumn } from "typeorm";
@Entity("author")
export class Author extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({length: 255})
    name: string;
    @Column()
    email: string;
    @Column({length: 255})
    password: string;
    @Column({length: 255,nullable:true})
    phone: string;
    @OneToMany(() => Book, book => book.author)
    books: Book[];
    @OneToOne(()=>Address, address=> address.author)
    @JoinColumn({name: 'addressId',
        referencedColumnName: 'id'
    })
    address: Address;
    

}

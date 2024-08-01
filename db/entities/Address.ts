import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Author } from "./Author.js";
import { JoinColumn } from "typeorm";
@Entity("address")
export class Address extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number ;
    @Column({length: 255})
    street: string;
    @Column({length: 255})
    city:string;
    @Column({length: 255})
    country:string;
    @OneToOne(()=>Author,author=>author.address)
    @JoinColumn({name: "addressId"})
    author:Partial<Author>;
   

}
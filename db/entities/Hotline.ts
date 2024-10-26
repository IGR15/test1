import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Shop } from "./Shop.js";

@Entity("hotline")
export class Hotline extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id: string;
    @Column({length: 255})
    hotlineNumber: string;
    @OneToOne(()=>Shop,shop=>shop.hotline)
    shop:Partial<Shop>;
}
import { BaseEntity, Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Product } from "./Product.js";
@Entity("catagory")
export class Catagory extends BaseEntity{
 @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({length: 255})
    catagoryName: string;
    @ManyToMany(()=>Product,product=>product.catagoryes)
    products: Product[];
}
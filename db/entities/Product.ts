import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Catagory } from "./Catagory.js";
import { Hotline } from "./Hotline.js";
import { Shop } from "./Shop.js";
@Entity("product")
export class Product extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({length: 255})
    name: string;
    @Column()
    price: number;
   @ManyToMany(()=>Catagory,catagory=>catagory.products)
   @JoinTable({
       name: "product_category", 
       joinColumn:{
        name: 'productId',
        referencedColumnName: 'id'
       },
       inverseJoinColumn:{
        name: 'catagoryId',
        referencedColumnName: 'id'
       }
   })
   catagoryes: Catagory[];
   @ManyToOne(()=>Shop,shop=>shop.products)
   shop:Shop
}
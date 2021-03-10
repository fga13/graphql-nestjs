import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ClientModel } from "../client/client.model";
import { ProductModel } from "../product/product.model";

@ObjectType()
@Entity()
export class OrderModel {
    @Field()
    @PrimaryGeneratedColumn()
    id: string;
    @Field()
    @Column()
    orderDate: Date;
    @Field(type => ProductModel, {nullable: true})
    @ManyToOne(() => ProductModel, product => product.orders)
    product: ProductModel;
    @Field(type => ClientModel, {nullable: true})
    @ManyToOne(() => ClientModel, client => client.orders)
    client: ClientModel;
}

import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { OrderModel } from '../order/order.model';

@ObjectType()
@Entity()
export class ProductModel {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;
  @Field()
  @Column({ length: 500, nullable: false })
  name: string;
  @Field()
  @Column('float', { nullable: false })
  price: Number;
  @Field(type => [OrderModel], { nullable: true })
  @OneToMany(type => OrderModel, order => order.product)
  orders: OrderModel[]
  @Field()
  @Column()
  @CreateDateColumn()
  created_at: Date;
  @Field()
  @Column()
  @UpdateDateColumn()
  updated_at: Date;
}
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { OrderModel } from '../order/order.model';

@ObjectType()
@Entity()
export class ClientModel {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;
  @Field()
  @Column({ length: 500, nullable: false })
  name: string;
  @Field()
  @Column('text', { nullable: false })
  email: string;
  @Field()
  @Column('timestamp', { nullable: false })
  dateOfBirth: Date;
  @Field(type => [OrderModel], { nullable: true })
  @OneToMany(type => OrderModel, order => order.client)
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
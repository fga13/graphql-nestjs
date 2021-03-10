import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ProductModule,
    ClientModule,
    OrderModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      debug:true
    }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: ['dist/**/*.model.js'],
    synchronize: true,
    logging: true
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

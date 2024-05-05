import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsService } from './services/products.service';
import { ProductsController } from './controller/products.controller';
import { ConfigurableProduct, DigitalProduct, GroupedProduct, Product, SimpleProduct } from './entities/products.entity';
import { Sale } from '../sale';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      SimpleProduct,
      DigitalProduct,
      ConfigurableProduct,
      GroupedProduct,
      Sale,
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}

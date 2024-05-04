import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsService } from '../services/products.service';
import { ProductsController } from '../controllers/products.controller';
import {
  ConfigurableProduct,
  DigitalProduct,
  GroupedProduct,
  Product,
  Sale,
  SimpleProduct,
} from 'src/functions/entities';

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

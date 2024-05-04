import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import {
  ConfigurableProduct,
  DigitalProduct,
  GroupedProduct,
  Product,
  Sale,
  SimpleProduct,
} from 'src/entities';

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

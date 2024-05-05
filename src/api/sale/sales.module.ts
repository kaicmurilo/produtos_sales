import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesService } from './services/sales.service';
import { SalesController } from './controller/sales.controller';
import { Sale } from './entities/sales.entity';
import { Product } from '../produtc';


@Module({
  imports: [TypeOrmModule.forFeature([Sale, Product])],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}

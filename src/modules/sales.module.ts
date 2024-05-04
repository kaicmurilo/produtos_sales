import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesService } from '../services/sales.service';
import { SalesController } from '../controllers/sales.controller';
import { Product, Sale } from 'src/functions/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Sale, Product])],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}

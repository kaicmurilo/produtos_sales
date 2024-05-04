import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { Product, Sale } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Sale, Product])],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}

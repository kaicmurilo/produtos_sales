import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Sale } from '../entities/sales.entity';
import { Product } from 'src/api/produtc';
import { isCpfValid, isEmailValid } from 'src/functions/validators';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale)
    private readonly saleRepository: Repository<Sale>,

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(sale: Sale): Promise<Sale> {
    if (!isEmailValid(sale.client.email)) {
      throw new BadRequestException(`Email inválido.`);
    }

    if (!isCpfValid(sale.client.cpf)) {
      throw new BadRequestException(`CPF inválido.`);
    }

    
    for (const item of sale.items) {
      const product = await this.productRepository.findOneBy({ id: item.id });
      if (!product) {
        throw new BadRequestException(
          `Produto com ID ${item.id} não encontrado.`,
        );
      }
      this.verify_stock(product, item.quantity);
      sale.total_value = this.calc_sale(item.quantity, product.sale_value);
    }
    return sale;
    return this.saleRepository.save(sale);
  }

  findAll(): Promise<Sale[]> {
    return this.saleRepository.find();
  }

  findOne(id: number): Promise<Sale> {
    return this.saleRepository.findOneBy({ id });
  }

  delete(id: number): Promise<void> {
    return this.saleRepository.delete(id).then(() => {});
  }

  private calc_sale(quantity: number, price: number) {
    return quantity * price;
  }

  private async verify_stock(product: Product, quantity: number) {
    if (product.type in ['simple', 'configurable']) {
      if (product.stock < quantity) {
        throw new BadRequestException(
          `Estoque insuficiente para ID do produto ${product.id}.`,
        );
      }

      product.stock -= quantity;
      await this.productRepository.save(product);
    }
  }
}

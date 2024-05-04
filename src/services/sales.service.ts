import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product, Sale, SimpleProduct } from 'src/functions/entities';
import { Repository } from 'typeorm';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale)
    private readonly saleRepository: Repository<Sale>,

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(sale: Sale): Promise<Sale> {
    for (const item of sale.items) {
      const product = await this.productRepository.findOneBy({ id: item.id });

      if (!product) {
        throw new BadRequestException(
          `Produto com ID ${item.id} não encontrado.`,
        );
      }

      console.log(product);

      if (product.type == 'simple') {
        console.log('simple');
        if (product.stock < item.quantity) {
          throw new BadRequestException(
            `Estoque insuficiente para ID do produto ${item.id}.`,
          );
        }

        product.stock -= item.quantity;
        await this.productRepository.save(product);
      }

      sale.total_value = product.sale_value * item.quantity;
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
}

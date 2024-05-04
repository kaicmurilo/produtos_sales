import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ConfigurableProduct,
  DigitalProduct,
  GroupedProduct,
  Product,
} from 'src/functions/entities';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(product: Product): Promise<Product> {
    this.validateProduct(product);
    return this.productRepository.save(product);
  }

  async update(id: number, updatedProduct: Partial<Product>): Promise<Product> {
    this.validateProduct(updatedProduct);
    return this.productRepository.save({ ...updatedProduct, id });
  }

  private validateProduct(product: Partial<Product>): void {
    switch (product.type) {
      case 'simple':
        this.validateSimpleProduct(product);
        break;
      case 'digital':
        this.validateDigitalProduct(product as Partial<DigitalProduct>);
        break;
      case 'configurable':
        this.validateConfigurableProduct(
          product as Partial<ConfigurableProduct>,
        );
        break;
      case 'grouped':
        this.validateGroupedProduct(product as Partial<GroupedProduct>);
        break;
      default:
        throw new BadRequestException('Tipo de produto inválido');
    }
  }
  private validateSimpleProduct(product: Partial<Product>): void {
    if (!product.name || !product.description || product.sale_value == null) {
      throw new BadRequestException(
        'Produto simples deve ter nome, descrição e valor de venda',
      );
    }
  }

  private validateDigitalProduct(product: Partial<DigitalProduct>): void {
    if (
      !product.name ||
      !product.description ||
      product.sale_value == null ||
      !product.download_link
    ) {
      throw new BadRequestException(
        'O produto digital deve ter nome, descrição, valor de venda e link para download',
      );
    }
  }

  private validateConfigurableProduct(
    product: Partial<ConfigurableProduct>,
  ): void {
    if (
      !product.name ||
      !product.description ||
      product.sale_value == null ||
      !product.attributes
    ) {
      throw new BadRequestException(
        'O produto configurável deve ter nome, descrição, valor de venda e atributos',
      );
    }
  }

  private validateGroupedProduct(product: Partial<GroupedProduct>): void {
    if (
      !product.name ||
      !product.description ||
      product.sale_value == null ||
      !product.associated_products
    ) {
      throw new BadRequestException(
        'O produto agrupado deve ter nome, descrição, valor de venda e produtos associados',
      );
    }
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id: number): Promise<Product> {
    return this.productRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}

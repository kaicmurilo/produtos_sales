import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty({ example: 1, description: 'ID do produto' })
  id: number;

  @ApiProperty({ example: 'Produto' })
  name: string;

  @ApiProperty({ example: 'Descrição do produto' })
  description: string;

  @ApiProperty({ example: 100 })
  sale_value: number;

  @ApiProperty({ example: 'simple', description: 'Tipo do produto' })
  product_type: string;
}

export class SimpleProductDto extends ProductDto {
  @ApiProperty({ example: 10 })
  stock: number;

  @ApiProperty({ example: 'simple' })
  product_type = 'simple';
}

export class DigitalProductDto extends ProductDto {
  @ApiProperty({ example: 'http://exemplo.com/download' })
  download_link: string;

  @ApiProperty({ example: 'digital' })
  product_type = 'digital';
}

export class ConfigurableProductDto extends ProductDto {
  @ApiProperty({ example: { color: 'vermelho', size: 'M' } })
  attributes: Record<string, string>;

  @ApiProperty({ example: 10 })
  stock: number;
  
  @ApiProperty({ example: 'configurable' })
  product_type = 'configurable';
}

export class GroupedProductDto extends ProductDto {
  @ApiProperty({ example: [1, 2] })
  associated_products: number[];

  @ApiProperty({ example: 'grouped' })
  product_type = 'grouped';
}

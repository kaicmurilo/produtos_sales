import { ApiProperty } from '@nestjs/swagger';

class SaleItemDto {
  @ApiProperty({ example: 1, description: 'ID do item' })
  id: number;

  @ApiProperty({ example: 'Item de exemplo', description: 'Descrição do item' })
  description: string;

  @ApiProperty({ example: 2, description: 'Quantidade do item' })
  quantity: number;

  @ApiProperty({ example: 50, description: 'Valor unitário do item' })
  unit_value: number;

  @ApiProperty({ example: 100, description: 'Valor total do item' })
  total_value: number;
}

class SaleClientDto {
  @ApiProperty({ example: 'João Silva', description: 'Nome do cliente' })
  name: string;

  @ApiProperty({ example: '000.000.000-00', description: 'CPF do cliente' })
  cpf: string;

  @ApiProperty({
    example: 'joaosilva@example.com',
    description: 'Email do cliente',
  })
  email: string;
}

export class SaleDto {
  @ApiProperty({ example: 1, description: 'ID da venda' })
  id: number;

  @ApiProperty({ example: '2024-05-03T15:00:00', description: 'Data da venda' })
  sale_date: Date;

  @ApiProperty({
    example: 'Descrição da venda',
    description: 'Descrição da venda',
  })
  description: string;

  @ApiProperty({ example: 200, description: 'Valor total da venda' })
  total_value: number;

  @ApiProperty({ type: [SaleItemDto], description: 'Itens da venda' })
  items: SaleItemDto[];

  @ApiProperty({ type: SaleClientDto, description: 'Dados do cliente' })
  client: SaleClientDto;
}

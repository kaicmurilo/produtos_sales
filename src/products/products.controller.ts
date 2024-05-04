import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ProductsService } from './products.service';
import { Product } from 'src/entities';

@ApiTags('products')
@ApiBearerAuth()
@Controller('products')
@UseGuards(AuthGuard('jwt'))
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'Recuperar Todos os produtos' })
  @ApiResponse({ status: 200, description: 'Sucesso' })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a single product' })
  @ApiResponse({ status: 200, description: 'Sucesso' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado' })
  findOne(@Param('id') id: number) {
    return this.productsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({ status: 201, description: 'Produto criado' })
  @ApiResponse({ status: 400, description: 'Entrada inválida' })
  create(@Body() product: Product) {
    return this.productsService.create(product);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing product' })
  @ApiResponse({ status: 200, description: 'Produto Atualizado' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado' })
  update(@Param('id') id: number, @Body() updatedProduct: Partial<Product>) {
    return this.productsService.update(id, updatedProduct);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product' })
  @ApiResponse({ status: 200, description: 'Produto excluído' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado' })
  delete(@Param('id') id: number) {
    return this.productsService.delete(id);
  }
}

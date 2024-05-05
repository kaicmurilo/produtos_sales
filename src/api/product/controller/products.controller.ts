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
  ApiBody,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ProductsService } from '../services/products.service';
import { ProductDto } from '../dtos/products.dto';

@ApiTags('products')
@ApiBearerAuth()
@Controller('products')
@UseGuards(AuthGuard('jwt'))
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'Recuperar todos os produtos' })
  @ApiResponse({ status: 200, description: 'Sucesso' })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Recuperar um único produto' })
  @ApiResponse({ status: 200, description: 'Sucesso' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado' })
  findOne(@Param('id') id: number) {
    return this.productsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar novo produto' })
  @ApiResponse({ status: 201, description: 'Produto criado' })
  @ApiResponse({ status: 400, description: 'Entrada inválida' })
  @ApiBody({ type: ProductDto })
  create(@Body() product: ProductDto) {
    return this.productsService.create(product);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar produto existente' })
  @ApiResponse({ status: 200, description: 'Produto atualizado' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado' })
  @ApiBody({ type: ProductDto })
  update(@Param('id') id: number, @Body() updatedProduct: Partial<ProductDto>) {
    return this.productsService.update(id, updatedProduct);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um produto' })
  @ApiResponse({ status: 200, description: 'Produto excluído' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado' })
  delete(@Param('id') id: number) {
    return this.productsService.delete(id);
  }
}

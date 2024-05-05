import {
  Controller,
  Get,
  Param,
  Post,
  Body,
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
import { SalesService } from '../services/sales.service';
import { SaleDto } from '../dtos/sales.dto';


@ApiTags('sales')
@ApiBearerAuth()
@Controller('sales')
@UseGuards(AuthGuard('jwt'))
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get()
  @ApiOperation({ summary: 'Recuperar todas as vendas' })
  @ApiResponse({ status: 200, description: 'Sucesso' })
  findAll() {
    return this.salesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Recuperar uma única venda' })
  @ApiResponse({ status: 200, description: 'Sucesso' })
  @ApiResponse({ status: 404, description: 'Venda não encontrada' })
  findOne(@Param('id') id: number) {
    return this.salesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar uma nova venda' })
  @ApiResponse({ status: 201, description: 'Venda criada' })
  @ApiResponse({ status: 400, description: 'Entrada inválida' })
  @ApiBody({ type: SaleDto })
  create(@Body() sale: SaleDto) {
    return this.salesService.create(sale);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir uma venda' })
  @ApiResponse({ status: 200, description: 'Venda excluída' })
  @ApiResponse({ status: 404, description: 'Venda não encontrada' })
  delete(@Param('id') id: number) {
    return this.salesService.delete(id);
  }
}

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CriarProdutoDto } from './dto/create-produto.dto';
import { AtualizarProdutoDto } from './dto/atualizar-produto.dto';

@Controller('produtos')
export class ProdutoController {
  constructor(private produtoService: ProdutoService) {}

  @Post()
  async criar(@Body() data: CriarProdutoDto) {
    return this.produtoService.criar(data);
  }

  @Get()
  async listar() {
    return this.produtoService.listar();
  }

  @Get(':id')
  async obter(@Param('id') id: string) {
    return this.produtoService.obterPorId(id);
  }

  @Put(':id')
  async atualizar(@Param('id') id: string, @Body() data: AtualizarProdutoDto) {
    return this.produtoService.atualizar(id, data);
  }

  @Delete(':id')
  async deletar(@Param('id') id: string) {
    return this.produtoService.deletar(id);
  }
}

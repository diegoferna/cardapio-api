import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CriarCategoriaDto } from './dto/create-categoria.dto';

@Controller('categorias')
export class CategoriaController {
  constructor(private categoriaService: CategoriaService) {}

  @Get(':id/produtos')
  async obterCategoriaComProdutos(@Param('id') id: string) {
    return this.categoriaService.obterCategoriaComProdutos(id);
  }
  @Post()
  async criar(@Body() data: CriarCategoriaDto) {
    return this.categoriaService.criar(data);
  }

  @Get()
  async listar() {
    return this.categoriaService.listar();
  }

  @Get(':id')
  async obterPorId(@Param('id') id: string) {
    return this.categoriaService.obterPorId(id);
  }

  @Put(':id')
  async atualizar(@Param('id') id: string, data: CriarCategoriaDto) {
    return this.categoriaService.atualizar(id, data);
  }

  @Delete(':id')
  async deletar(@Param('id') id: string) {
    return this.categoriaService.deletar(id);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CardapioService } from './cardapio.service';
import { CriarCardapioDto } from './dto/create-cardapio.dto';

@Controller('cardapios')
export class CardapioController {
  constructor(private cardapioService: CardapioService) {}

  @Get('atual')
  async obterCardapioAtual() {
    return this.cardapioService.obterCardapioAtual();
  }

  @Post()
  async criar(@Body() data: CriarCardapioDto) {
    return this.cardapioService.criar(data);
  }

  @Get()
  async listar() {
    return this.cardapioService.listar();
  }

  @Get(':id')
  async obterPorId(@Param('id') id: string) {
    return this.cardapioService.obterPorId(id);
  }

  @Put(':id')
  async atualizar(@Param('id') id: string, data: CriarCardapioDto) {
    return this.cardapioService.atualizar(id, data);
  }

  @Delete(':id')
  async deletar(@Param('id') id: string) {
    return this.cardapioService.deletar(id);
  }
}

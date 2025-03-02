import { Controller } from '@nestjs/common';
import { CardapioService } from './cardapio.service';
import { CriarCardapioDto } from './dto/create-cardapio.dto';

@Controller('cardapio')
export class CardapioController {
  constructor(private cardapioService: CardapioService) {}

  async criar(data: CriarCardapioDto) {
    return this.cardapioService.criar(data);
  }

  async listar() {
    return this.cardapioService.listar();
  }

  async obterPorId(id: string) {
    return this.cardapioService.obterPorId(id);
  }

  async atualizar(id: string, data: CriarCardapioDto) {
    return this.cardapioService.atualizar(id, data);
  }

  async deletar(id: string) {
    return this.cardapioService.deletar(id);
  }
}

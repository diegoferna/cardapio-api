import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CriarCardapioDto } from './dto/create-cardapio.dto';
import { AtualizarCardapioDto } from './dto/atualizar-cardapio.dto';

@Injectable()
export class CardapioService {
  constructor(private readonly prisma: PrismaService) {}

  async criar(data: CriarCardapioDto) {
    return this.prisma.cardapio.create({ data });
  }

  async listar() {
    return this.prisma.produto.findMany();
  }

  async obterPorId(id: string) {
    return this.prisma.produto.findUnique({ where: { id } });
  }

  async atualizar(id: string, data: AtualizarCardapioDto) {
    return this.prisma.produto.update({ where: { id }, data });
  }

  async deletar(id: string) {
    return this.prisma.produto.delete({ where: { id } });
  }
}

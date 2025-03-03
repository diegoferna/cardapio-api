import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CriarCardapioDto } from './dto/create-cardapio.dto';
import { AtualizarCardapioDto } from './dto/atualizar-cardapio.dto';
import { Turno } from '@prisma/client';

@Injectable()
export class CardapioService {
  constructor(private readonly prisma: PrismaService) {}

  async criar(data: CriarCardapioDto) {
    try {
      return await this.prisma.cardapio.create({ data });
    } catch (error) {
      console.error('Erro ao criar cardápio:', error);
      throw new InternalServerErrorException('Erro ao criar cardápio.');
    }
  }

  async listar() {
    return await this.prisma.cardapio.findMany();
  }

  async obterPorId(id: string) {
    const cardapio = await this.prisma.cardapio.findUnique({ where: { id } });

    if (!cardapio) {
      throw new NotFoundException(`Cardápio com ID ${id} não encontrado.`);
    }

    return cardapio;
  }

  async atualizar(id: string, data: AtualizarCardapioDto) {
    try {
      return await this.prisma.cardapio.update({ where: { id }, data });
    } catch {
      throw new NotFoundException(
        `Não foi possível atualizar. Cardápio com ID ${id} não encontrado.`,
      );
    }
  }

  async deletar(id: string) {
    try {
      return await this.prisma.cardapio.delete({ where: { id } });
    } catch {
      throw new NotFoundException(
        `Não foi possível excluir. Cardápio com ID ${id} não encontrado.`,
      );
    }
  }

  async obterCardapioAtual() {
    const horaAtual = new Date().getHours();

    const turno =
      horaAtual >= 6 && horaAtual < 18 ? Turno.DIURNO : Turno.NOTURNO;

    const cardapio = await this.prisma.cardapio.findFirst({
      where: { turno },
      include: { produtos: true },
    });

    if (!cardapio) {
      throw new NotFoundException(
        'Nenhum cardápio encontrado para o turno atual.',
      );
    }

    return cardapio;
  }
}

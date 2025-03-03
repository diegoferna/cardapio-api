import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CriarProdutoDto } from './dto/create-produto.dto';
import { AtualizarProdutoDto } from './dto/atualizar-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaService) {}

  async criar(data: CriarProdutoDto) {
    try {
      return await this.prisma.produto.create({ data });
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      throw new InternalServerErrorException('Erro ao criar produto.');
    }
  }

  async listar() {
    return await this.prisma.produto.findMany();
  }

  async obterPorId(id: string) {
    const produto = await this.prisma.produto.findUnique({ where: { id } });

    if (!produto) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado.`);
    }

    return produto;
  }

  async atualizar(id: string, data: AtualizarProdutoDto) {
    try {
      return await this.prisma.produto.update({ where: { id }, data });
    } catch {
      throw new NotFoundException(
        `Não foi possível atualizar. Produto com ID ${id} não encontrado.`,
      );
    }
  }

  async deletar(id: string) {
    try {
      return await this.prisma.produto.delete({ where: { id } });
    } catch {
      throw new NotFoundException(
        `Não foi possível excluir. Produto com ID ${id} não encontrado.`,
      );
    }
  }
}

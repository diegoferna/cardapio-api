import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CriarCategoriaDto } from './dto/create-categoria.dto';
import { AtualizarCategoriaDto } from './dto/atualizar-categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(private readonly prisma: PrismaService) {}

  async criar(data: CriarCategoriaDto) {
    try {
      return await this.prisma.categoria.create({ data });
    } catch (error) {
      console.error('Erro ao criar categoria:', error);
      throw new InternalServerErrorException('Erro ao criar categoria.');
    }
  }

  async listar() {
    return await this.prisma.categoria.findMany();
  }

  async obterPorId(id: string) {
    const categoria = await this.prisma.categoria.findUnique({ where: { id } });

    if (!categoria) {
      throw new NotFoundException(`Categoria com ID ${id} não encontrada.`);
    }

    return categoria;
  }

  async atualizar(id: string, data: AtualizarCategoriaDto) {
    try {
      return await this.prisma.categoria.update({ where: { id }, data });
    } catch {
      throw new NotFoundException(
        `Não foi possível atualizar. Categoria com ID ${id} não encontrada.`,
      );
    }
  }

  async deletar(id: string) {
    try {
      return await this.prisma.categoria.delete({ where: { id } });
    } catch {
      throw new NotFoundException(
        `Não foi possível excluir. Categoria com ID ${id} não encontrada.`,
      );
    }
  }

  async obterCategoriaComProdutos(id: string) {
    const categoria = await this.prisma.categoria.findUnique({
      where: { id },
      include: { produtos: true },
    });

    if (!categoria) {
      throw new NotFoundException(`Categoria com ID ${id} não encontrada.`);
    }

    return categoria;
  }
}

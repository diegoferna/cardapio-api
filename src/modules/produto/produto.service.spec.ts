import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Produto, Prisma } from '@prisma/client';
import { CriarProdutoDto } from './dto/create-produto.dto';
import { AtualizarProdutoDto } from './dto/atualizar-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(private prisma: PrismaService) {}

  async criar(data: Prisma.ProdutoCreateInput): Promise<CriarProdutoDto> {
    return this.prisma.produto.create({ data });
  }

  async listar(): Promise<Produto[]> {
    return this.prisma.produto.findMany();
  }

  async obterPorId(id: string): Promise<Produto | null> {
    return this.prisma.produto.findUnique({ where: { id } });
  }

  async atualizar(
    id: string,
    data: Prisma.ProdutoUpdateInput,
  ): Promise<AtualizarProdutoDto> {
    return this.prisma.produto.update({ where: { id }, data });
  }

  async deletar(id: string): Promise<Produto> {
    return this.prisma.produto.delete({ where: { id } });
  }
}

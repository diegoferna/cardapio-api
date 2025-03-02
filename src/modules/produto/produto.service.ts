import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CriarProdutoDto } from './dto/create-produto.dto';
import { AtualizarProdutoDto } from './dto/atualizar-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaService) {}

  async criar(data: CriarProdutoDto) {
    return this.prisma.produto.create({ data });
  }

  async listar() {
    return this.prisma.produto.findMany();
  }

  async obterPorId(id: string) {
    return this.prisma.produto.findUnique({ where: { id } });
  }

  async atualizar(id: string, data: AtualizarProdutoDto) {
    return this.prisma.produto.update({ where: { id }, data });
  }

  async deletar(id: string) {
    return this.prisma.produto.delete({ where: { id } });
  }
}

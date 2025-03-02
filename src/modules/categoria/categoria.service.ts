import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CriarCategoriaDto } from './dto/create-categoria.dto';
import { AtualizarCategoriaDto } from './dto/atualizar-categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(private readonly prisma: PrismaService) {}

  async ciar(data: CriarCategoriaDto) {
    return await this.prisma.categoria.create({ data });
  }

  async listar() {
    return await this.prisma.categoria.findMany();
  }

  async obterPorId(id: string) {
    return await this.prisma.categoria.findUnique({ where: { id } });
  }

  async atualizar(id: string, data: AtualizarCategoriaDto) {
    return await this.prisma.categoria.update({ where: { id }, data });
  }

  async deletar(id: string) {
    return await this.prisma.categoria.delete({ where: { id } });
  }
}

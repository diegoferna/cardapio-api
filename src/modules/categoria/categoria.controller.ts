import { Controller } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CriarCategoriaDto } from './dto/create-categoria.dto';

@Controller('categoria')
export class CategoriaController {
  constructor(private categoriaService: CategoriaService) {}

  async criar(data: CriarCategoriaDto) {
    return this.categoriaService.ciar(data);
  }

  async listar() {
    return this.categoriaService.listar();
  }

  async obterPorId(id: string) {
    return this.categoriaService.obterPorId(id);
  }

  async atualizar(id: string, data: CriarCategoriaDto) {
    return this.categoriaService.atualizar(id, data);
  }

  async deletar(id: string) {
    return this.categoriaService.deletar(id);
  }
}

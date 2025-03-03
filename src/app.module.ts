import { Module } from '@nestjs/common';

import { CardapioModule } from './modules/cardapio/cardapio.module';
import { ProdutoModule } from './modules/produto/produto.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CardapioModule, ProdutoModule, CategoriaModule, PrismaModule],
})
export class AppModule {}

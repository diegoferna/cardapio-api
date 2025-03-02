import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardapioModule } from './modules/cardapio/cardapio.module';
import { ProdutoModule } from './modules/produto/produto.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CardapioModule, ProdutoModule, CategoriaModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

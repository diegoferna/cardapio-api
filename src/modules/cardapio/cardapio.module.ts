import { Module } from '@nestjs/common';
import { CardapioService } from './cardapio.service';
import { CardapioController } from './cardapio.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [CardapioService],
  controllers: [CardapioController, PrismaService],
})
export class CardapioModule {}

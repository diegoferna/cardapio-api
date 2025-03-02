import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Turno } from '@prisma/client';

export class CriarCardapioDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsEnum(Turno)
  turno: Turno;
}

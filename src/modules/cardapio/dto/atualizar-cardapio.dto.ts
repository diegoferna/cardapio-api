import { Turno } from '@prisma/client';
import { IsString, IsOptional, IsEnum } from 'class-validator';

export class AtualizarCardapioDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsEnum(Turno)
  turno?: Turno;
}

import { IsString, IsOptional, IsNumber, IsPositive } from 'class-validator';
import { Transform } from 'class-transformer';

export class AtualizarProdutoDto {
  @IsOptional()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  nome?: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  preco?: number;

  @IsOptional()
  @IsString()
  imagem?: string;

  @IsOptional()
  @IsString()
  cardapioId?: string;

  @IsOptional()
  @IsString()
  categoriaId?: string;
}

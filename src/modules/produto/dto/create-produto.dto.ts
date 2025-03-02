import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CriarProdutoDto {
  @IsString()
  @IsNotEmpty()
  nome!: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsNumber()
  preco: number;

  @IsString()
  @IsNotEmpty()
  imagem: string;

  @IsString()
  @IsNotEmpty()
  categoriaId: string;

  @IsString()
  @IsNotEmpty()
  cardapioId: string;
}

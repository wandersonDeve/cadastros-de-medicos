import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateEspecialidadeDto {
  @IsNotEmpty()
  nome: string;
}

import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Especialidade } from '../entities/especialidade.entity';

export class CreateEspecialidadeDto {
  @IsString()
  @IsNotEmpty()
  nome: string;
}

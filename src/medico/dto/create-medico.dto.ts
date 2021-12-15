import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
} from 'class-validator';

export class CreateMedicoDto {
  @IsString({ message: 'O nome deve ser uma string' })
  @Length(3, 120, { message: 'O nome deve ter entre 3 e 120 caracteres' })
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsNumber()
  @Max(9999999, { message: 'O CRM deve conter ate sete digitos numericos' })
  @IsNotEmpty({ message: 'O CRM não pode ser vazio' })
  crm: number;

  @IsNumber()
  @IsNotEmpty({ message: 'O Telefone Fixo não pode ser vazio' })
  telefone_fixo: number;

  @IsNumber()
  @IsNotEmpty({ message: 'O Celular não pode ser vazio' })
  telefone_cel: number;

  @IsNumber()
  @IsNotEmpty({ message: 'O CEP não pode ser vazio' })
  cep: number;

  @IsArray()
  especialidades: Array<number>;
}

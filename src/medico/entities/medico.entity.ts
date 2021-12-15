import { Prisma } from '@prisma/client';

export class Medico implements Prisma.MedicoUncheckedCreateInput {
  id?: number;
  nome: string;
  crm: number;
  telefone_fixo: number;
  telefone_cel: number;
  cep: number;
  especialidades: Array<number>;
}

import { Prisma } from '@prisma/client';

export class Especialidade implements Prisma.EspecialidadeUncheckedCreateInput {
  id?: number;
  nome: string;
}

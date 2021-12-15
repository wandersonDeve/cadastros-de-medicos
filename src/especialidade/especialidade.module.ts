import { Module } from '@nestjs/common';
import { EspecialidadeService } from './especialidade.service';
import { EspecialidadeController } from './especialidade.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EspecialidadeController],
  providers: [EspecialidadeService, PrismaService],
})
export class EspecialidadeModule {}

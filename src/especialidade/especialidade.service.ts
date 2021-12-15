import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateEspecialidadeDto } from './dto/create-especialidade.dto';
import { UpdateEspecialidadeDto } from './dto/update-especialidade.dto';

@Injectable()
export class EspecialidadeService {
  constructor(private readonly db: PrismaService) {}

  async create(data: CreateEspecialidadeDto) {
    const especialidade = await this.db.especialidade.findFirst({
      where: {
        nome: data.nome,
      },
    });

    if (especialidade) {
      throw new BadRequestException('Especialidade já cadastrada');
    }

    return await this.db.especialidade.create({ data });
  }

  async findAll() {
    return await this.db.especialidade.findMany();
  }

  async findOne(id: number) {
    const especialidade = await this.db.especialidade.findFirst({
      where: {
        id: id,
      },
    });

    if (!especialidade) {
      throw new BadRequestException('Especialidade não encontrada');
    }

    return await this.db.especialidade.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, data: UpdateEspecialidadeDto) {
    const especialidade = await this.db.especialidade.findFirst({
      where: {
        id: id,
      },
    });

    if (!especialidade) {
      throw new BadRequestException('Especialidade não encontrada');
    }

    return await this.db.especialidade.update({
      where: {
        id: id,
      },
      data: {
        ...data,
      },
    });
  }

  async remove(id: number) {
    const especialidade = await this.db.especialidade.findFirst({
      where: {
        id: id,
      },
    });

    if (!especialidade) {
      throw new BadRequestException('Especialidade não encontrada');
    }

    await this.db.especialidade.delete({
      where: {
        id: id,
      },
    });

    return 'Especialidade excluida com sucesso';
  }
}

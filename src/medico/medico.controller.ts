import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  UseGuards,
  ValidationPipe,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { MedicoService } from './medico.service';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { Medico } from '@prisma/client';

@Controller('medico')
export class MedicoController {
  constructor(private readonly medicoService: MedicoService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createMedicoDto: CreateMedicoDto) {
    return this.medicoService.create(createMedicoDto);
  }

  @Get()
  findAll() {
    return this.medicoService.findAll();
  }

  @Get('pesquisar')
  procurarProdutos(@Query() query: UpdateMedicoDto) {
    return this.medicoService.produtoQuery(query);
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.medicoService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMedicoDto: UpdateMedicoDto,
  ) {
    return this.medicoService.update(id, updateMedicoDto);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.medicoService.remove(id);
  }
}

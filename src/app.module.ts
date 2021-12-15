import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicoModule } from './medico/medico.module';
import { EspecialidadeModule } from './especialidade/especialidade.module';

@Module({
  imports: [MedicoModule, EspecialidadeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

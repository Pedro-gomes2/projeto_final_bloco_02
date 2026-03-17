import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './Entities/categoria.entity';
import { CategoriaService } from './Service/categoria.service';
import { CategoriaController } from './Controller/categoria.controller';


@Module({
  imports: [
    TypeOrmModule.forFeature([Categoria]),
  ],
  controllers: [CategoriaController],
  providers: [CategoriaService],
  exports: [TypeOrmModule], 
})
export class CategoriaModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';
import { Categoria } from '../categoria/entities/categoria.entity';
import { ProdutoController } from './Controller/produto.controller';
import { ProdutoService } from './Service/produto.service';
import { CategoriaModule } from '../categoria/categoria.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([Produto]), CategoriaModule
  ],
  controllers: [ProdutoController],
  providers: [ProdutoService],
})
export class ProdutoModule {}
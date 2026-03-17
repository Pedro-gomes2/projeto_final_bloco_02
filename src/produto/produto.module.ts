import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './Entities/produto.entity';
import { Categoria } from '../categoria/Entities/categoria.entity';
import { ProdutoController } from './Controller/produto.controller';
import { ProdutoService } from './Service/produto.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([Produto, Categoria]),
  ],
  controllers: [ProdutoController],
  providers: [ProdutoService],
})
export class ProdutoModule {}
import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { ProdutoService } from '../Service/produto.service';
import { Produto } from '../entities/produto.entity';
import { JwtAuthGuard } from '../../auth/guard/jewt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('produto')
@UseGuards(JwtAuthGuard)
@Controller('/produto')
@ApiBearerAuth()
export class ProdutoController {

  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  findAll() {
    return this.produtoService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.produtoService.findById(id);
  }

  @Get('/nome/:nome')
  findByNome(@Param('nome') nome: string) {
    return this.produtoService.findByNome(nome);
  }

  
  @Post()
  create(@Body() produto: Produto) {
    return this.produtoService.create(produto);
  }

  
  @Put()
  update(@Body() produto: Produto) {
    return this.produtoService.update(produto);
  }

 
  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.produtoService.delete(id);
  }
}
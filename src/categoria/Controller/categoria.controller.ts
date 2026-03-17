import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { CategoriaService } from '../Service/categoria.service';
import { Categoria } from '../Entities/categoria.entity';
import { JwtAuthGuard } from '../../auth/guard/jewt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('/categoria')
export class CategoriaController {

  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  findAll() {
    return this.categoriaService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.categoriaService.findById(id);
  }

  @Get('/descricao/:descricao')
  findByDescricao(@Param('descricao') descricao: string) {
    return this.categoriaService.findByDescricao(descricao);
  }

  
  @Post()
  create(@Body() categoria: Categoria) {
    return this.categoriaService.create(categoria);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  update(@Body() categoria: Categoria) {
    return this.categoriaService.update(categoria);
  }


  
  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.categoriaService.delete(id);
  }
}
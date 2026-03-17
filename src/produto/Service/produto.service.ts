import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Produto } from '../Entities/produto.entity';
import { Categoria } from '../../categoria/Entities/categoria.entity';


@Injectable()
export class ProdutoService {

  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,

    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  async findAll(): Promise<Produto[]> {
    return await this.produtoRepository.find({
      relations: ['categoria'],
    });
  }

  async findById(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOne({
      where: { id },
      relations: ['categoria'],
    });

    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }

    return produto;
  }

  async findByNome(nome: string): Promise<Produto[]> {
    return await this.produtoRepository.find({
      where: {
        nome: Like(`%${nome}%`),
      },
      relations: ['categoria'],
    });
  }

  async create(produto: Produto): Promise<Produto> {
    const categoria = await this.categoriaRepository.findOne({
      where: { id: produto.categoria.id },
    });

    if (!categoria) {
      throw new NotFoundException('Categoria não encontrada');
    }

    produto.categoria = categoria;

    return await this.produtoRepository.save(produto);
  }

  async update(produto: Produto): Promise<Produto> {
    await this.findById(produto.id);

    const categoria = await this.categoriaRepository.findOne({
      where: { id: produto.categoria.id },
    });

    if (!categoria) {
      throw new NotFoundException('Categoria não encontrada');
    }

    produto.categoria = categoria;

    return await this.produtoRepository.save(produto);
  }

  async delete(id: number): Promise<void> {
    const produto = await this.findById(id);
    await this.produtoRepository.remove(produto);
  }
}
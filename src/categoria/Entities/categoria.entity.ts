import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Produto } from '../../produto/entities/produto.entity';
import { ApiProperty } from '@nestjs/swagger';



@Entity()
export class Categoria {

  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  descricao: string;

  @ApiProperty()
  @OneToMany(() => Produto, (produto) => produto.categoria)
  produtos: Produto[];
}
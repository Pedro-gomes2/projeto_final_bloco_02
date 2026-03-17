import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';



@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  //@OneToMany(() => Produto, (produto) => produto.categoria)
  //produtos: Produto[];
}
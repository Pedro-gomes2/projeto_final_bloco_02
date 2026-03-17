import { Transform, TransformFnParams } from "class-transformer"
import { IsNotEmpty, IsNumber, IsPositive } from "class-validator"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Categoria } from "../../categoria/entities/categoria.entity"
import { ApiProperty } from "@nestjs/swagger"



@Entity({ name: "tb_produtos" })
export class Produto {

    @PrimaryGeneratedColumn()
    @ApiProperty() 
    id: number

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    @ApiProperty() 
    nome: string

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    quantidade: number;


    @IsNumber({ maxDecimalPlaces: 2 })
    @IsNotEmpty()
    @IsPositive()
    @Column({ type: "decimal", precision: 10, scale: 2, })
    @ApiProperty()
    preco: number

    @Column()
    @ApiProperty()
    foto: string

    @ApiProperty({ type: () => Categoria })  
    @ManyToOne(() => Categoria, (categoria) => categoria.produtos, {
        onDelete: "CASCADE"
    })
    categoria: Categoria

}
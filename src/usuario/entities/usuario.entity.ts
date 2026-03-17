import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Transform, TransformFnParams } from "class-transformer"
import { ApiProperty } from "@nestjs/swagger"


@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn() 
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @Transform(({value}: TransformFnParams)=> value?.trim())// remover  o espaço em branco no ini/fim.
    @Column({length: 255, nullable: false}) 
    @ApiProperty()
    nome: string

    @Transform(({value}: TransformFnParams)=> value?.trim())// remover  o espaço em branco no ini/fim.    
    @IsEmail()
    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    @ApiProperty({example: "email@email.com.br"})
    usuario: string

    @Transform(({value}: TransformFnParams)=> value?.trim())// remover  o espaço em branco no ini/fim.
    @MinLength(8)
    @IsNotEmpty()
    @Column({length: 255, nullable: false }) 
    @ApiProperty()
    senha: string

    
    @Column({length: 5000 }) 
    @ApiProperty()
    foto: string

    
}
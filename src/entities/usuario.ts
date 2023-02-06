import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("usuario", { schema: "test" })
export class Usuario {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  Id: string;

  @Column("varchar", { name: "Nome", nullable: true, length: 255 })
  Nome: string | null;

  @Column("varchar", { name: "Email", nullable: true, length: 255 })
  Email: string | null; 

  @Column("varchar", { name: "Telefone", nullable: true, length: 255 })
  Telefone: string | null;

  @Column("varchar", { name: "Senha", nullable: true, length: 255 })
  Senha: string | null;
};
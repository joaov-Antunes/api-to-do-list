import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("usuario", { schema: "todolist" })
export class Usuario {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  Id: string;

  @Column("varchar", { name: "Nome", nullable: true, length: 255 })
  Nome: string | null;

  @Column("varchar", { name: "NomeUsuario", nullable: true, length: 20 })
  NomeUsuario: string | null;

  @Column("varchar", { name: "Senha", nullable: true, length: 20 })
  Senha: string | null;
}

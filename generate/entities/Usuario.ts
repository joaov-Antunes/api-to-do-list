import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tarefas } from "./Tarefas";

@Entity("usuario", { schema: "todolist" })
export class Usuario {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  Id: number;

  @Column("varchar", { name: "Nome", nullable: true, length: 255 })
  Nome: string | null;

  @Column("varchar", { name: "NomeUsuario", nullable: true, length: 20 })
  NomeUsuario: string | null;

  @Column("varchar", { name: "Senha", nullable: true, length: 20 })
  Senha: string | null;

  @OneToMany(() => Tarefas, (Tarefas) => Tarefas.Usuario)
  Tarefas: Tarefas[];
}

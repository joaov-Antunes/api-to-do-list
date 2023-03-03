import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tarefas } from "./Tarefas";

@Entity("urgencia", { schema: "todolist" })
export class Urgencia {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  Id: number;

  @Column("varchar", { name: "Nivel", nullable: true, length: 6 })
  Nivel: string | null;

  @OneToMany(() => Tarefas, (Tarefas) => Tarefas.IdUrgencia2)
  Tarefas: Tarefas[];
}

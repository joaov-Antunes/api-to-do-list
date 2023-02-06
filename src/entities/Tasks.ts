import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks", { schema: "todolist" })
export class Tasks {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  Id: string;

  @Column("varchar", { name: "Nome", length: 255, nullable: true })
  Nome: string;

  @Column("tinyint", { name: "Feita", width: 1, nullable: true })
  Feita: boolean;
};
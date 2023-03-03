import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("concluida", { schema: "todolist" })
export class Concluida {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  Id: string;

  @Column("varchar", { name: "Feita", nullable: true, length: 20 })
  Feita: string | null;
}

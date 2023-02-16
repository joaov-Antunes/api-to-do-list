import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Urgencia } from "./Urgencia";

@Index("IdUrgencia", ["IdUrgencia"], {})
@Entity("tarefas", { schema: "todolist" })
export class Tarefas {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  Id: string;

  @Column("varchar", { name: "Nome", nullable: true, length: 255 })
  Nome: string | null;

  @Column("date", { name: "DataFinal", nullable: true })
  DataFinal: string | null;

  @Column("int", { name: "IdUrgencia", nullable: true })
  IdUrgencia: number | null;

  @Column("varchar", { name: "Urgencia", nullable: true, length: 6 })
  Urgencia: string | null;

  @Column("varchar", { name: "Feita", nullable: true, length: 20 })
  Feita: string | null;

  @Column("tinyint", { name: "StatusTarefa", nullable: true, width: 1 })
  StatusTarefa: boolean | null;

  @ManyToOne(() => Urgencia, (Urgencia) => Urgencia.Tarefas, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "IdUrgencia", referencedColumnName: "Id" }])
  IdUrgencia2: Urgencia;
}

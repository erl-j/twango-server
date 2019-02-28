import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn
  } from "typeorm";
  import { Length, IsNotEmpty } from "class-validator";
  
  @Entity()
  export class SuperOrder {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    @Length(0, 30)
    storeName:string;
  
    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
  }

  export default SuperOrder;
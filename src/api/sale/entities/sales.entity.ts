import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sales')
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('timestamp')
  sale_date: Date;

  @Column()
  description: string;

  @Column('decimal', { nullable: false, default: 0.0 })
  total_value: number;

  @Column('json')
  items: Record<string, any>[];

  @Column('json')
  client: {
    name: string;
    cpf: string;
    email: string;
  };
}

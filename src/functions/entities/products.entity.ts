import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ChildEntity,
  TableInheritance,
} from 'typeorm';

@Entity('products')

@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  name: string;

  @Column()
  description: string;

  @Column('float', { nullable: false, default: 0.0 })
  sale_value: number;

  @Column({ type: 'varchar' })
  type: string;

  @Column({ nullable: true })
  stock?: number
}

@ChildEntity('simple')
export class SimpleProduct extends Product {
  @Column({ nullable: true, default: 0 })
  stock: number;
}

@ChildEntity('digital')
export class DigitalProduct extends Product {
  @Column({ nullable: true })
  download_link: string;
}

@ChildEntity('configurable')
export class ConfigurableProduct extends Product {
  @Column('json', { nullable: true })
  attributes: Record<string, string>;
}

@ChildEntity('grouped')
export class GroupedProduct extends Product {
  @Column('int', { array: true, nullable: true })
  associated_products: number[];
}

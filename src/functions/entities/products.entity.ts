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

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal')
  sale_value: number;

  @Column({ type: 'varchar' })
  type: string;

}

@ChildEntity('simple')
export class SimpleProduct extends Product {
  @Column({ default: 0 })
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

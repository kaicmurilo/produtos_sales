import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/entities';

describe('ProductsService', () => {
  let service: ProductsService;
  let repository: Repository<Product>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    repository = module.get<Repository<Product>>(getRepositoryToken(Product));
  });

  it('Deve ser Definido', () => {
    expect(service).toBeDefined();
  });

  it('Deveria criar um produto', async () => {
    const product = new Product();
    product.name = 'Test Product';
    product.description = 'Test Description';
    product.sale_value = 100;
    product.stock = 10;

    jest.spyOn(repository, 'save').mockResolvedValue(product);
    expect(await service.create(product)).toBe(product);
  });
});

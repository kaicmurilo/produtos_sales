import { Test, TestingModule } from '@nestjs/testing';
import { SalesService } from './sales.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product, Sale } from 'src/entities';


describe('SalesService', () => {
  let service: SalesService;
  let saleRepository: Repository<Sale>;
  let productRepository: Repository<Product>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SalesService,
        {
          provide: getRepositoryToken(Sale),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(Product),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<SalesService>(SalesService);
    saleRepository = module.get<Repository<Sale>>(getRepositoryToken(Sale));
    productRepository = module.get<Repository<Product>>(
      getRepositoryToken(Product),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a sale', async () => {
    const sale = new Sale();
    sale.description = 'Test Sale';
    sale.sale_date = new Date();
    sale.total_value = 100;
    sale.items = [
      {
        id: 1,
        description: 'Item 1',
        quantity: 2,
        unit_value: 50,
        total_value: 100,
      },
    ];
    sale.client = {
      name: 'Test Client',
      cpf: '000.000.000-00',
      email: 'test@example.com',
    };

    const product = new Product();
    product.id = 1;
    product.stock = 10;

    jest.spyOn(productRepository, 'findOneBy').mockResolvedValue(product);
    jest.spyOn(productRepository, 'save').mockResolvedValue(product);
    jest.spyOn(saleRepository, 'save').mockResolvedValue(sale);

    expect(await service.create(sale)).toBe(sale);
  });

});

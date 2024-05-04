import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from 'src/entities';

describe('ProductsController', () => {
  let controller: ProductsController;
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductsService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([]),
            findOne: jest.fn().mockResolvedValue(new Product()),
            create: jest.fn().mockResolvedValue(new Product()),
            update: jest.fn().mockResolvedValue(new Product()),
            delete: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all products', async () => {
    expect(await controller.findAll()).toEqual([]);
  });

  it('should return a single product', async () => {
    expect(await controller.findOne(1)).toBeInstanceOf(Product);
  });

  it('should create a product', async () => {
    expect(await controller.create(new Product())).toBeInstanceOf(Product);
  });

  it('should update a product', async () => {
    expect(await controller.update(1, new Product())).toBeInstanceOf(Product);
  });

  it('should delete a product', async () => {
    expect(await controller.delete(1)).toBeUndefined();
  });
});

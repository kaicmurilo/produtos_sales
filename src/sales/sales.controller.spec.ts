import { Test, TestingModule } from '@nestjs/testing';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import { Sale } from 'src/entities';

describe('SalesController', () => {
  let controller: SalesController;
  let service: SalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalesController],
      providers: [
        {
          provide: SalesService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([]),
            findOne: jest.fn().mockResolvedValue(new Sale()),
            create: jest.fn().mockResolvedValue(new Sale()),
            delete: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    controller = module.get<SalesController>(SalesController);
    service = module.get<SalesService>(SalesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all sales', async () => {
    expect(await controller.findAll()).toEqual([]);
  });

  it('should return a single sale', async () => {
    expect(await controller.findOne(1)).toBeInstanceOf(Sale);
  });

  it('should create a sale', async () => {
    expect(await controller.create(new Sale())).toBeInstanceOf(Sale);
  });

  it('should delete a sale', async () => {
    expect(await controller.delete(1)).toBeUndefined();
  });
});

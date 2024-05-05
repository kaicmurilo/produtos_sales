import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './produtc/products.module';
import { SalesModule } from './sale/sales.module';
import { AuthModule } from './auth_user/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Sale } from './sale';
import { Product } from './produtc';
import { User } from './auth_user/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: parseInt(configService.get<string>('DB_PORT'), 10),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [User, Product, Sale],
        synchronize: true,
      }),
    }),
    ProductsModule,
    SalesModule,
    AuthModule,
  ],
})
export class AppModule {}

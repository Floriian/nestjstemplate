import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../db/Datasource';
import { ConfigModule } from '@nestjs/config';
import { configModuleOptions } from './config';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    ConfigModule.forRoot(configModuleOptions),
  ],
})
export class AppModule {}

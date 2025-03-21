import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvConfigModule } from './shared/infrastructure/env-config/env-config.module';
import { UsersModule } from './users/infrastructure/users.module';
import { DatabseModule } from './shared/infrastructure/databse/databse.module';

@Module({
  imports: [ConfigModule, EnvConfigModule, UsersModule, DatabseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

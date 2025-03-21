import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvConfigModule } from './shared/infrastructure/env-config/env-config.module';
import { UsersModule } from './users/infrastructure/users.module';
import { SignupUseCase } from './users/application/usecases/signup.usecase';

@Module({
  imports: [ConfigModule, EnvConfigModule, UsersModule],
  controllers: [],
  providers: [
    {
      provide: SignupUseCase.UseCase,
      useClass: SignupUseCase.UseCase,
    },
  ],
})
export class AppModule {}

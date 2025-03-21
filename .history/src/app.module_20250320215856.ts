import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvConfigModule } from './shared/infrastructure/env-config/env-config.module';
import { UsersModule } from './users/infrastructure/users.module';
import { SignupUseCase } from './users/application/usecases/signup.usecase';
import { UserInMemoryRepository } from './users/infrastructure/database/in-memory/repositories/user-in-memory.repository';
import { BcryptjsHashProvider } from './users/infrastructure/providers/hash-provider/bcryptjs-hash.provider';

@Module({
  imports: [ConfigModule, EnvConfigModule, UsersModule],
  controllers: [],
  providers: [
    {
      provide: 'UserRepository',
      useClass: UserInMemoryRepository,
    },
    {
      provide: 'HashProvider',
      useClass: BcryptjsHashProvider,
    },
    {
      provide: SignupUseCase.UseCase,
      useFactory: () = SignupUseCase.UseCase,
    },
  ],
})
export class AppModule {}

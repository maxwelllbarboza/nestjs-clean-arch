import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvConfigModule } from './shared/infrastructure/env-config/env-config.module';
import { UsersModule } from './users/infrastructure/users.module';
import { SignupUseCase } from './users/application/usecases/signup.usecase';
import { UserInMemoryRepository } from './users/infrastructure/database/in-memory/repositories/user-in-memory.repository';
import { BcryptjsHashProvider } from './users/infrastructure/providers/hash-provider/bcryptjs-hash.provider';
import { UserRepository } from './users/domain/repositories/user.repository';
import { HashProvider } from './shared/application/providers/hash-provider';
import { SigninUseCase } from './users/application/usecases/signin.usecase';
import { DeleteUserUseCase, GetUserUseCase } from './users/application/usecases/delete-user.usecase';
import { ListUserUseCase } from './users/application/usecases/list-users.usecase';
import { UpdateUserUseCase } from './users/application/usecases/update-user.usecase';
import { UpdatePasswordUseCase } from './users/application/usecases/update-password.usecase';

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
      useFactory: (
        userRepository: UserRepository.Repository,
        hashProvider: HashProvider,
      ) => {
        return new SignupUseCase.UseCase(userRepository, hashProvider);
      },
      inject: ['UserRepository', 'HashProvider'],
    },
    {
      provide: SigninUseCase.UseCase,
      useFactory: (
        userRepository: UserRepository.Repository,
        hashProvider: HashProvider,
      ) => {
        return new SigninUseCase.UseCase(userRepository, hashProvider);
      },
      inject: ['UserRepository', 'HashProvider'],
    },
    {
      provide: GetUserUseCase.UseCase,
      useFactory: (userRepository: UserRepository.Repository) => {
        return new GetUserUseCase.UseCase(userRepository);
      },
      inject: ['UserRepository'],
    },
    {
      provide: ListUserUseCase.UseCase,
      useFactory: (userRepository: UserRepository.Repository) => {
        return new ListUserUseCase.UseCase(userRepository);
      },
      inject: ['UserRepository'],
    },
    {
      provide: UpdateUserUseCase.UseCase,
      useFactory: (userRepository: UserRepository.Repository) => {
        return new UpdateUserUseCase.UseCase(userRepository);
      },
      inject: ['UserRepository'],
    },
    {
      provide: UpdatePasswordUseCase.UseCase,
      useFactory: (
        userRepository: UserRepository.Repository,
        hashProvider: HashProvider,
      ) => {
        return new UpdatePasswordUseCase.UseCase(userRepository, hashProvider);
      },
      inject: ['UserRepository', 'HashProvider'],
    },
    {
      provide: DeleteUserUseCase.UseCase,
      useFactory: (userRepository: UserRepository.Repository) => {
        return new DeleteUserUseCase.UseCase(userRepository);
      },
      inject: ['UserRepository'],
    },
  ],
})
export class AppModule {}

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
   
  ],
})
export class AppModule {}

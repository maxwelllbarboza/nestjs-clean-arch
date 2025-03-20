import { UserRepository } from '@/users/domain/repositories/user.repository';
import { BadRequestError } from '../errors/bad-request-error';
import { UserEntity } from '@/users/domain/entities/user.entity';
import { HashProvider } from '@/shared/application/providers/hash-provider';
import { SignupInputDto } from '../dtos/signup-input.dto';
import { SignupOutputDto } from '../dtos/signup-output.dto';
import { UseCase as DefaultUsecase } from '@/shared/application/providers/usecases/use-case';

export namespace SignupUseCase {
  export type Input = SignupInputDto;
  export type Output = SignupOutputDto;

  export class UseCase implements DefaultUsecase<Input, > {
    constructor(
      private userRepository: UserRepository.Repository,
      private hashProvider: HashProvider,
    ) {}
    async execute(input: Input): Promise<Output> {
      const { email, name, password } = input;
      if (!email || !name || !password) {
        throw new BadRequestError('Input data not provided');
      }
      await this.userRepository.emailExists(email);
      const hashPassword = await this.hashProvider.generateHash(password);
      const entity = new UserEntity(
        Object.assign(input, { password: hashPassword }),
      );
      await this.userRepository.insert(entity);
      return entity.toJSON();
    }
  }
}

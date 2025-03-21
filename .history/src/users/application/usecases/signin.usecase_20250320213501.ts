import { UserRepository } from '@/users/domain/repositories/user.repository';
import { BadRequestError } from '../../../shared/application/errors/bad-request-error';
import { UserEntity } from '@/users/domain/entities/user.entity';
import { HashProvider } from '@/shared/application/providers/hash-provider';
import { UseCase as DefaultUsecase } from '@/shared/application/usecases/use-case';
import { UserOutput, UserOutputMapper } from '../dtos/user-output';
import { SigninInputDto } from '../dtos/signin-input.dto';

export namespace SigninUseCase {
  export type Input = SigninInputDto;
  export type Output = UserOutput;

  export class UseCase implements DefaultUsecase<Input, Output> {
    constructor(
      private userRepository: UserRepository.Repository,
      private hashProvider: HashProvider,
    ) {}
    async execute(input: Input): Promise<Output> {
      const { email, password } = input;
      if (!email || !password) {
        throw new BadRequestError('Input data not provided');
      }
      const await this.userRepository.emailExists(email);

      const hashPassword = await this.hashProvider.generateHash(password);
      const entity = new UserEntity(
        Object.assign(input, { password: hashPassword }),
      );
      await this.userRepository.insert(entity);
      return UserOutputMapper.toOutput(entity);
    }
  }
}

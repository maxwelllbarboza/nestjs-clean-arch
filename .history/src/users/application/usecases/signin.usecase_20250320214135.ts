import { UserRepository } from '@/users/domain/repositories/user.repository';
import { BadRequestError } from '../../../shared/application/errors/bad-request-error';
import { HashProvider } from '@/shared/application/providers/hash-provider';
import { UseCase as DefaultUsecase } from '@/shared/application/usecases/use-case';
import { UserOutput, UserOutputMapper } from '../dtos/user-output';
import { SigninInputDto } from '../dtos/signin-input.dto';
import { InvalidCredencialError } from '@/shared/application/errors/invalid-credencial-error';

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
      const entity = await this.userRepository.findByEmail(email);

      const hashPasswordMatches = await this.hashProvider.compareHash(
        password,
        entity.password,
      );
      if (!hashPasswordMatches) {
        throw new InvalidCredencialError('Input data not provided');
      }

      return UserOutputMapper.toOutput(entity);
    }
  }
}

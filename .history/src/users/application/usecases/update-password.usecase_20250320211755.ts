import { UserRepository } from '@/users/domain/repositories/user.repository';
import { UseCase as DefaultUsecase } from '@/shared/application/usecases/use-case';
import { UserOutputMapper } from '../dtos/user-output';
import { UpdatePasswordInputDto } from '../dtos/update-password-input.dto';
import { UpdatePasswordOutputDto } from '../dtos/update-password-output.dto';
import { InvalidPasswordError } from '@/shared/application/errors/invalid-password-error';
import { HashProvider } from '@/shared/application/providers/hash-provider';

export namespace UpdatePasswordUseCase {
  export type Input = UpdatePasswordInputDto;
  export type Output = UpdatePasswordOutputDto;

  export class UseCase implements DefaultUsecase<Input, Output> {
    constructor(
      private userRepository: UserRepository.Repository,
      private hashProvider: HashProvider,
    ) {}

    async execute(input: Input): Promise<Output> {
      const entity = await this.userRepository.findById(input.id);
      if (!input.password || !input.oldPassword) {
        throw new InvalidPasswordError(
          'Old password and new password is requires.',
        );
      }
      const checkOldPassword = await entity.update(input.name);
      await this.userRepository.update(entity);
      return UserOutputMapper.toOutput(entity);
    }
  }
}

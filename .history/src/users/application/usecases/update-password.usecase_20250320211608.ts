import { UserRepository } from '@/users/domain/repositories/user.repository';
import { UseCase as DefaultUsecase } from '@/shared/application/usecases/use-case';
import { BadRequestError } from '@/shared/application/errors/bad-request-error';
import { UserOutputMapper } from '../dtos/user-output';
import { UpdatePasswordInputDto } from '../dtos/update-password-input.dto';
import { UpdatePasswordOutputDto } from '../dtos/update-password-output.dto';
import { InvalidPasswordError } from '@/shared/application/errors/invalid-password-error';

export namespace UpdatePasswordUseCase {
  export type Input = UpdatePasswordInputDto;
  export type Output = UpdatePasswordOutputDto;

  export class UseCase implements DefaultUsecase<Input, Output> {
    constructor(private userRepository: UserRepository.Repository) {}

    async execute(input: Input): Promise<Output> {
      const entity = await this.userRepository.findById(input.id);
      if (!input.password || !input.oldPassword) {
        throw new InvalidPasswordError('OldPassword and newName not provided.');
      }


      entity.update(input.name);
      await this.userRepository.update(entity);
      return UserOutputMapper.toOutput(entity);
    }
  }
}

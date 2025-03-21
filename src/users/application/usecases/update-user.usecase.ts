import { UserRepository } from '@/users/domain/repositories/user.repository';
import { UseCase as DefaultUsecase } from '@/shared/application/usecases/use-case';
import { UpdateUserOutputDto } from '../dtos/update-user-output.dto';
import { UpdateUserInputDto } from '../dtos/update-user-input.dto';
import { BadRequestError } from '@/shared/application/errors/bad-request-error';
import { UserOutputMapper } from '../dtos/user-output';

export namespace UpdateUserUseCase {
  export type Input = UpdateUserInputDto;
  export type Output = UpdateUserOutputDto;

  export class UseCase implements DefaultUsecase<Input, Output> {
    constructor(private userRepository: UserRepository.Repository) {}

    async execute(input: Input): Promise<Output> {
      if (!input.name) {
        throw new BadRequestError('Name not provided.');
      }
      const entity = await this.userRepository.findById(input.id);
      entity.update(input.name);
      await this.userRepository.update(entity);
      return UserOutputMapper.toOutput(entity);
    }
  }
}

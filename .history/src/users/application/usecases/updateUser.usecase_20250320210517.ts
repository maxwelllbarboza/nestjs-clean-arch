import { UserRepository } from '@/users/domain/repositories/user.repository';
import { UseCase as DefaultUsecase } from '@/shared/application/usecases/use-case';
import { UpdateUserOutputDto } from '../dtos/updateUser-output.dto';
import { UpdateUserInputDto } from '../dtos/updateUser-input.dto';
import { BadRequestError } from '@/shared/application/errors/bad-request-error';

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
      await this.userRepository
      return entity.toJSON();
    }
  }
}

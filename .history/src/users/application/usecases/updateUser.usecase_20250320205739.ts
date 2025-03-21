import { UserRepository } from '@/users/domain/repositories/user.repository';
import { GetUserInputDto } from '../dtos/getUser-input.dto';
import { UseCase as DefaultUsecase } from '@/shared/application/usecases/use-case';
import { UpdateUserOutputDto } from '../dtos/updateUser-output.dto';

export namespace GetUserUseCase {
  export type Input = GetUserInputDto;
  export type Output = UpdateUserOutputDto;

  export class UseCase implements DefaultUsecase<Input, Output> {
    constructor(private userRepository: UserRepository.Repository) {}

    async execute(input: Input): Promise<Output> {
      const entity = await this.userRepository.findById(input.id);
      return entity.toJSON();
    }
  }
}

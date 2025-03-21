import { UserRepository } from '@/users/domain/repositories/user.repository';
import { GetUserInputDto } from '../dtos/getUser-input.dto';
import { GetUserOutputDto } from '../dtos/getUser-output.dto';
import { UseCase as DefaultUsecase } from '@/shared/application/usecases/use-case';

import { DeleteUserInputDto } from '../dtos/delete-user-input.dto';

export namespace GetUserUseCase {
  export type Input = DeleteUserInputDto;
  export type Output = void;

  export class UseCase implements DefaultUsecase<Input, Output> {
    constructor(private userRepository: UserRepository.Repository) {}

    async execute(input: Input): Promise<Output> {
      await this.userRepository.delete(input.id);
    }
  }
}

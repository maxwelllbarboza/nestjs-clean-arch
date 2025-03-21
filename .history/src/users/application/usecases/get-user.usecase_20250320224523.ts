import { UserRepository } from '@/users/domain/repositories/user.repository';
import { GetUserInputDto } from '../dtos/getUser-input.dto';

import { UseCase as DefaultUsecase } from '@/shared/application/usecases/use-case';
import { UserOutput, UserOutputMapper } from '../dtos/user-output';

export namespace GetUserUseCase {
  export type Input = GetUserInputDto;
  export type Output = UserOutput;

  export class UseCase implements DefaultUsecase<Input, Output> {
    constructor(private userRepository: UserRepository.Repository) {}

    async execute(input: Input): Promise<Output> {
      const entity = await this.userRepository.findById(input.id);
      return UserOutputMapper.toOutput(entity);
    }
  }
}

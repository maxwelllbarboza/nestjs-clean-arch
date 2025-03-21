import { UserRepository } from '@/users/domain/repositories/user.repository';
import { UseCase as DefaultUsecase } from '@/shared/application/usecases/use-case';
import { UpdateUserOutputDto } from '../dtos/updateUser-output.dto';
import { UpdateUserInputDto } from '../dtos/updateUser-input.dto';

export namespace UpdateUserUseCase {
  export type Input = UpdateUserInputDto;
  export type Output = UpdateUserOutputDto;

  export class UseCase implements DefaultUsecase<Input, Output> {
    constructor(private userRepository: UserRepository.Repository) {}

    async execute(input: Input): Promise<Output> {
      if(!)
      const entity = await this.userRepository.findById(input.id);
      return entity.toJSON();
    }
  }
}

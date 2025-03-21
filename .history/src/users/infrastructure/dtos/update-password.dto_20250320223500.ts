import { UpdateUserUseCase } from '@/users/application/usecases/update-user.usecase';

export class UpdatePasswordDto implements Omit<UpdateUserUseCase.Input, 'id'> {
  name: string;
}

import { UpdateUserUseCase } from '@/users/application/usecases/update-user.usecase';

export class UpdatePasswordDto implements Omit<UpdatePasswordUseCase.Input, 'id'> {
  name: string;
}

import { SigninUseCase } from '@/users/application/usecases/signin.usecase';

export class SigninDto implements SigninUseCase.Input {
  name: string;
  email: string;
  password: string;
}

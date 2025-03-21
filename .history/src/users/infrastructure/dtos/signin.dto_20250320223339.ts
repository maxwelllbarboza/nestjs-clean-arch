import { SigninUseCase } from '@/users/application/usecases/signin.usecase';
import { SignupUseCase } from '@/users/application/usecases/signup.usecase';

export class SigninDto implements SigninUseCase.Input {
  name: string;
  email: string;
  password: string;
}

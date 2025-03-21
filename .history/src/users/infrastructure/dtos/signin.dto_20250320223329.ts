import { SignupUseCase } from '@/users/application/usecases/signup.usecase';

export class SigninDto implements SignupUseCase.Input {
  name: string;
  email: string;
  password: string;
}

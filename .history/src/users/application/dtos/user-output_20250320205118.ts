import { UserEntity } from '@/users/domain/entities/user.entity';

export type UserOutput = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;

}

export class UserOutputMapper {
  static toOutput(entity: UserEntity): ;
}

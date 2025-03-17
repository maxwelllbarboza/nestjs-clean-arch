import { faker } from '@faker-js/faker';
import { UserProps } from '../../user.entity';

type Props = {
  name?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
};

export function UserDataBuilder(props: Props): UserProps{
  return {
    name: string;
    email?: string;
    password?: string;
    createdAt?: Date;
  }

}

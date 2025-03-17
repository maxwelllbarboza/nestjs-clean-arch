import { UserDataBuilder } from '@/users/domain/entities/testing/helpers/user-data-builder';
import { UserEntity, UserProps } from '@/users/domain/entities/user.entity';
import { validate as uuidValidate } from 'uuid';

type StubProps = {
  prop1: string;
  prop2: number;
};

class StubEntity extends Entity<> {}

describe('EntityUserEntity unit tests', () => {


  it('Getter of createdAt field', () => {});
});

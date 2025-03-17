import { UserDataBuilder } from '@/users/domain/entities/testing/helpers/user-data-builder';
import { UserEntity, UserProps } from '@/users/domain/entities/user.entity';
import {validate} from 'uuid'

describe('UserEntity unit tests', () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = UserDataBuilder({});
    sut = new UserEntity(props);
  });

  it('Getter of createdAt field', () => {});
});

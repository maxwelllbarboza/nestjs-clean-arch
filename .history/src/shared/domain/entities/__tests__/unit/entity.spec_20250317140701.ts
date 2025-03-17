import { UserDataBuilder } from '@/users/domain/entities/testing/helpers/user-data-builder';
import { UserEntity, UserProps } from '@/users/domain/entities/user.entity';
import { validate as uuidValidate } from 'uuid';
import { Entity } from '../../entity';

type StubProps = {
  prop1: string;
  prop2: number;
};

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  it('Should set props and id', () => {
    const props = { prop1: 'value1', prop2: 15 };
    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity._id).not.toBeNull();
    expect(uuidValidate(entity._id)).toBeTruthy();
  });

  it('Should accept a valid uuid', () => {
    const props = { prop1: 'value1', prop2: 15 };
    const id = 'f20764f4-6333-434b-bd8b-cdc5a48fd838';
    const entity = new StubEntity(props, id);

    expect(uuidValidate(entity._id)).toBeTruthy();
    expect(entity._id).toBe(id);
  });

  it('Should convert a entity to a JSON', () => {
    const props = { prop1: 'value1', prop2: 15 };
    const id = 'f20764f4-6333-434b-bd8b-cdc5a48fd838';
    const entity = new StubEntity(props, id);

    expect(uuidValidate(entity._id)).toBeTruthy();
    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props,
    });
  });
});

import { faker } from '@faker-js/faker';
import { UserEntity } from '../../user.entity';

describe('UserEntity unit tests', () => {
  it('Constructor method', () => {
    const props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const sut = new UserEntity(props);

    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.name);
    expect(sut.props.createdAt).toEqual(props.name);
  });
});

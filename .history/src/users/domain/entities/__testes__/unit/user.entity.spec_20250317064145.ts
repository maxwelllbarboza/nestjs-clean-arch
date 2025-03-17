import { faker } from '@faker-js/faker';

describe('UserEntity unit tests', () => {
  it('Constructor method', () => {
    const props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const sut = new UserEntity(props)

    expect(sut.props.name)
  });
});

export type UserProps = {
  name: string;
  email: string;
  password: string;
  reatedAt?: Date;

};

export class UserEntity {
  constructor(public readonly props: UserProps){
    this.props.createdAt = this.props.createdAt ?? new Date()
  }
}

import { v4 as uuidv4 } from 'uuid';

export abstract class Entity<Props = any> {
  public readonly id: string;
  public readonly props: Props;

  constructor(props: Props, id)
}

export class InvalidCredencialError extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'InvalidCredencialError';
  }
}

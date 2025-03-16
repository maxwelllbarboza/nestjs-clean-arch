import { Injectable } from '@nestjs/common';
import { EnvConfig } from './env-config.interface';

@Injectable()
export class EnvConfigService implements EnvConfig {
  constructor
  getAppPort(): number {
    throw new Error('Method not implemented.');
  }
  getNodeEnv(): string {
    throw new Error('Method not implemented.');
  }
}

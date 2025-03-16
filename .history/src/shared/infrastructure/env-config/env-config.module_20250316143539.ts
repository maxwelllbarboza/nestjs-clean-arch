import { DynamicModule, Module } from '@nestjs/common';
import { EnvConfigService } from './env-config.service';
import { ConfigModule, ConfigModuleOptions } from '@nestjs/config';

@Module({
  providers: [EnvConfigService],
})
export class EnvConfigModule extends ConfigModule {
  static forRoot<ValidationOptions extends Record<string, any>>(options?: ConfigModuleOptions<ValidationOptions>): Promise<DynamicModule> {
      (options: ConfigModuleOptions = {}): DynamicModule{
        return super.forRoot()
      }
  }
}

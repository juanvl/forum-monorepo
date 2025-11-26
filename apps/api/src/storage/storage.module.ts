import { Module } from '@nestjs/common';
import { EnvModule } from 'src/env/env.module';
import { R2Storage } from './r2-storage';

@Module({
  imports: [EnvModule],
  providers: [R2Storage],
  exports: [R2Storage],
})
export class StorageModule {}

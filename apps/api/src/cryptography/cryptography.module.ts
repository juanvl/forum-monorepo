import { Module } from '@nestjs/common';

import { BcryptHasher } from './bcrypt-hasher';
import { JwtEncrypter } from './jwt-encrypter';

@Module({
  providers: [BcryptHasher, JwtEncrypter],
  exports: [BcryptHasher, JwtEncrypter],
})
export class CryptographyModule {}

import { Global, Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaClient } from '@prisma/client';

@Global()
@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [],
  providers: [],
  exports:[PrismaClient]
})
export class AppModule {}

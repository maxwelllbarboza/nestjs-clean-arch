import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [Env]
  providers: [PrismaService],
})
export class DatabseModule {}

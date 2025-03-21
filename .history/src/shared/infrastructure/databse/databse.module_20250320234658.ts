import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Module({
  impor
  providers: [PrismaService],
})
export class DatabseModule {}

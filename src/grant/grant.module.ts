import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Grant } from './grant.entity';
import { GrantResolver } from './grant.resolver';
import { GrantService } from './grant.service';

@Module({
  imports: [TypeOrmModule.forFeature([Grant])],
  providers: [GrantService, GrantResolver],
})
export class GrantModule {}

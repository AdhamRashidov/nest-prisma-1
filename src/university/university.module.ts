import { Module } from '@nestjs/common';
import { UniversityService } from './university.service';
import { UniversityResolver } from './university.resolver';

@Module({
  providers: [UniversityResolver, UniversityService],
})
export class UniversityModule {}

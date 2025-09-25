import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UniversityService } from './university.service';
import { University } from './entities/university.entity';
import { CreateUniversityInput } from './dto/create-university.input';
import { UpdateUniversityInput } from './dto/update-university.input';

@Resolver(() => University)
export class UniversityResolver {
  constructor(private readonly universityService: UniversityService) {}

  @Mutation(() => University)
  createUniversity(@Args('createUniversityInput') createUniversityInput: CreateUniversityInput) {
    return this.universityService.create(createUniversityInput);
  }

  @Query(() => [University], { name: 'universities' })
  findAll() {
    return this.universityService.findAll();
  }

  @Query(() => University, { name: 'university' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.universityService.findOne(id);
  }

  @Mutation(() => University)
  updateUniversity(@Args('updateUniversityInput') updateUniversityInput: UpdateUniversityInput) {
    return this.universityService.update(updateUniversityInput.id, updateUniversityInput);
  }

  @Mutation(() => [University])
  removeUniversity(@Args('id', { type: () => String }) id: string) {
    return this.universityService.remove(id);
  }
}

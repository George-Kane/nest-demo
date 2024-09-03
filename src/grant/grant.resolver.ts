import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Grant } from './grant.entity';
import { GrantService } from './grant.service';

@Resolver(() => Grant)
export class GrantResolver {
  constructor(private grantService: GrantService) {}

  @Query(() => [Grant])
  async grants(): Promise<Grant[]> {
    return this.grantService.findAll();
  }

  @Query(() => Grant)
  async grant(@Args('id') id: number): Promise<Grant> {
    return this.grantService.findOne(id);
  }

  @Mutation(() => Grant)
  async createGrant(
    @Args('title') title: string,
    @Args('description') description: string,
    @Args('areasOfFunding', { type: () => [String] }) areasOfFunding: string[],
    @Args('amount') amount: number,
    @Args('deadline') deadline: Date,
  ): Promise<Grant> {
    const grant = { title, description, areasOfFunding, amount, deadline };
    return this.grantService.create(grant);
  }

  @Mutation(() => Boolean)
  async removeGrant(@Args('id') id: number): Promise<boolean> {
    await this.grantService.remove(id);
    return true;
  }
}

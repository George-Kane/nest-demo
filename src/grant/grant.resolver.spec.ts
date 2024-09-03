import { Test, TestingModule } from '@nestjs/testing';

import { GrantResolver } from './grant.resolver';

describe('GrantResolver', () => {
  let resolver: GrantResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrantResolver],
    }).compile();

    resolver = module.get<GrantResolver>(GrantResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

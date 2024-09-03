import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Grant } from './grant.entity';

@Injectable()
export class GrantService {
  constructor(
    @InjectRepository(Grant)
    private grantsRepository: Repository<Grant>,
  ) {}

  findAll(): Promise<Grant[]> {
    return this.grantsRepository.find();
  }

  findOne(id: number): Promise<Grant> {
    return this.grantsRepository.findOneBy({ id });
  }

  async create(grant: Partial<Grant>): Promise<Grant> {
    const newGrant = this.grantsRepository.create(grant);
    return this.grantsRepository.save(newGrant);
  }

  async remove(id: number): Promise<void> {
    await this.grantsRepository.delete(id);
  }
}

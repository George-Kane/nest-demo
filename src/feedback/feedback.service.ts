import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Feedback } from './feedback.entity';
import { CreateFeedbackInput } from './feedback.input';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private feedbackRepository: Repository<Feedback>,
  ) {}

  async create(createFeedbackInput: CreateFeedbackInput): Promise<Feedback> {
    const feedback = this.feedbackRepository.create(createFeedbackInput);
    return this.feedbackRepository.save(feedback);
  }

  async findAll(): Promise<Feedback[]> {
    return this.feedbackRepository.find();
  }

  async findOne(id: number): Promise<Feedback> {
    return this.feedbackRepository.findOne({ where: { id } });
  }
}

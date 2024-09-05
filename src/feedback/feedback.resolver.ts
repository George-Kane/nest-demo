import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Feedback } from './feedback.entity';
import { CreateFeedbackInput } from './feedback.input';
import { FeedbackService } from './feedback.service';

@Resolver(() => Feedback)
export class FeedbackResolver {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Mutation(() => Feedback)
  async createFeedback(
    @Args('createFeedbackInput') createFeedbackInput: CreateFeedbackInput,
  ): Promise<Feedback> {
    return this.feedbackService.create(createFeedbackInput);
  }

  @Query(() => [Feedback], { name: 'feedbacks' })
  async findAll(): Promise<Feedback[]> {
    return this.feedbackService.findAll();
  }

  @Query(() => Feedback, { name: 'feedback' })
  async findOne(@Args('id', { type: () => ID }) id: number): Promise<Feedback> {
    return this.feedbackService.findOne(id);
  }
}

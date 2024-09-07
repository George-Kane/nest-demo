import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateFeedbackInput {
  @Field()
  feedback: string;

  @Field(() => Number, { nullable: true })
  like_grant_ids?: number;

  @Field(() => Number, { nullable: true })
  dislike_grant_ids?: number;
}

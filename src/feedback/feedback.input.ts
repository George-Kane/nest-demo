import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateFeedbackInput {
  @Field()
  feedback: string;

  @Field(() => Int, { nullable: true })
  like_grant_id?: number;

  @Field(() => Int, { nullable: true })
  dislike_grant_id?: number;
}

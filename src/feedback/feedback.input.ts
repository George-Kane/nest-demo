import { Field, InputType, Int } from '@nestjs/graphql';

import { IsInt, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateFeedbackInput {
  @Field()
  @IsString()
  feedback: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  like_grant_id?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  dislike_grant_id?: number;
}

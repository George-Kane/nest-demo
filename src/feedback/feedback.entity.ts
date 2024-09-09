import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity('feedback')
export class Feedback {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column()
  feedback: string;

  @Field({ nullable: true })
  @CreateDateColumn({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @Field({ nullable: true })
  @UpdateDateColumn({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  @Field(() => Int, { nullable: true })
  @Column()
  like_grant_id: number;

  @Field(() => Int, { nullable: true })
  @Column()
  dislike_grant_id: number;
}

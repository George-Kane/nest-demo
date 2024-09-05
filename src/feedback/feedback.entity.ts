import { Field, ID, ObjectType } from '@nestjs/graphql';

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

  @Field()
  @Column()
  feedback: string;

  @Field()
  @CreateDateColumn({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @Field()
  @UpdateDateColumn({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  @Field(() => [Number], { nullable: true })
  @Column('int', { array: true, nullable: true })
  like_grant_ids: number[];

  @Field(() => [Number], { nullable: true })
  @Column('int', { array: true, nullable: true })
  dislike_grant_ids: number[];
}

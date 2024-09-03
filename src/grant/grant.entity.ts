import { Field, ObjectType } from '@nestjs/graphql';

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('grants')
@ObjectType()
export class Grant {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  foundation: string;

  @Column({ name: 'areas_of_funding', type: 'text', array: true })
  @Field(() => [String])
  areasOfFunding: string[];

  @Column()
  @Field()
  status: 'Applied' | 'Rejected' | 'Accepted';

  @Column({ name: 'avg_amount' })
  @Field()
  avgAmount: number;

  @Column()
  @Field()
  deadline: Date;

  @Column({ name: 'match_date' })
  @Field()
  matchDate: Date;

  @Column()
  @Field()
  location: string;
}

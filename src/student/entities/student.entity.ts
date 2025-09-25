import { ObjectType, Field, Int } from '@nestjs/graphql';
import { v4 } from 'uuid';

@ObjectType()
export class Student {
	@Field(() => String, { defaultValue: v4() })
	id?: string;

	@Field()
	fullName?: string;

	@Field()
	email?: string;

	@Field(() => Int)
	age?: number;
}

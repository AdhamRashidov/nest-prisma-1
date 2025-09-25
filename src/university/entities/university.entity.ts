import { ObjectType, Field, Int } from '@nestjs/graphql';
import { v4 } from 'uuid';

@ObjectType()
export class University {
	@Field(() => String, { defaultValue: v4() })
	id?: string;

	@Field(() => String)
	name?: string;

	@Field(() => Int)
	number?: number;

	@Field(() => String)
	address?: string;
}

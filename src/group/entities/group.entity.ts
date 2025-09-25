import { ObjectType, Field, Int } from '@nestjs/graphql';
import { v4 } from 'uuid';

@ObjectType()
export class Group {
	@Field(() => String, { defaultValue: v4() })
	id?: string;

	@Field()
	name?: string;
}

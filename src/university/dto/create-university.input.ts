import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUniversityInput {
	@Field(() => String)
	name: string;

	@Field(() => Int)
	number: number;

	@Field(() => String)
	address: string;
}

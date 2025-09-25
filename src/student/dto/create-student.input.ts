import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStudentInput {
	@Field()
	fullName: string;

	@Field()
	email: string;

	@Field(() => Int)
	age: number;
}

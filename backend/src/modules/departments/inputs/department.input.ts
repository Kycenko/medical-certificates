import { Field, InputType } from '@nestjs/graphql'
import { MaxLength, MinLength } from 'class-validator'

@InputType()
export class DepartmentInput {
	@Field(() => String)
	@MinLength(3)
	@MaxLength(20)
	title: string
}

import { ArgsType, Field } from "@nestjs/graphql";
import { LocationWhereUniqueInput } from "./LocationWhereUniqueInput";

@ArgsType()
class FindOneLocationArgs {
  @Field(() => LocationWhereUniqueInput, { nullable: false })
  where!: LocationWhereUniqueInput;
}

export { FindOneLocationArgs };

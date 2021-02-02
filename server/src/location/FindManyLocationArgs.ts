import { ArgsType, Field } from "@nestjs/graphql";
import { LocationWhereInput } from "./LocationWhereInput";

@ArgsType()
class FindManyLocationArgs {
  @Field(() => LocationWhereInput, { nullable: true })
  where?: LocationWhereInput;
}

export { FindManyLocationArgs };

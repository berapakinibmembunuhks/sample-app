import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type EventCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  location?: LocationWhereUniqueInput | null;
  name?: string | null;
};

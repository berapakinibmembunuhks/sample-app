import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type EventWhereInput = {
  createdAt?: Date;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  id?: string;
  location?: LocationWhereUniqueInput | null;
  name?: string | null;
  updatedAt?: Date;
};
